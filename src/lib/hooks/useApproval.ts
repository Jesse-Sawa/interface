import { MaxUint256 } from '@ethersproject/constants'
import { TransactionResponse } from '@ethersproject/providers'
import { Currency, CurrencyAmount, Token } from '@uniswap/sdk-core'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useTokenContract } from 'hooks/useContract'
import { useTokenAllowance } from 'hooks/useTokenAllowance'
import { useCallback, useMemo } from 'react'
import { calculateGasMargin } from 'utils/calculateGasMargin'

import { NATIVE_CURRENCY_IS_ERC20 } from '../../constants/tokens'

export enum ApprovalState {
  UNKNOWN = 'UNKNOWN',
  NOT_APPROVED = 'NOT_APPROVED',
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
}

export function useApprovalStateForSpender(
  amountToApprove: CurrencyAmount<Currency> | undefined,
  spender: string | undefined,
  useIsPendingApproval: (token?: Token, spender?: string) => boolean
): ApprovalState {
  const { account, chainId } = useActiveWeb3React()

  let token: Token | undefined
  if (chainId && NATIVE_CURRENCY_IS_ERC20[chainId]) {
    token = amountToApprove?.currency as Token
  } else {
    token = amountToApprove?.currency?.isToken ? amountToApprove?.currency : undefined
  }

  const currentAllowance = useTokenAllowance(token, account ?? undefined, spender)
  const pendingApproval = useIsPendingApproval(token, spender)

  return useMemo(() => {
    const nativeCurrencyIsErc20 = chainId ? NATIVE_CURRENCY_IS_ERC20[chainId] : false
    if (!amountToApprove || !spender) return ApprovalState.UNKNOWN
    if (amountToApprove.currency.isNative && !nativeCurrencyIsErc20) return ApprovalState.APPROVED
    // we might not have enough data to know whether we need to approve or not
    if (!currentAllowance) return ApprovalState.UNKNOWN

    // amountToApprove will be defined if currentAllowance is
    return currentAllowance.lessThan(amountToApprove)
      ? pendingApproval
        ? ApprovalState.PENDING
        : ApprovalState.NOT_APPROVED
      : ApprovalState.APPROVED
  }, [amountToApprove, chainId, currentAllowance, pendingApproval, spender])
}

export function useApproval(
  amountToApprove: CurrencyAmount<Currency> | undefined,
  spender: string | undefined,
  useIsPendingApproval: (token?: Token, spender?: string) => boolean
): [
  ApprovalState,
  () => Promise<{ response: TransactionResponse; tokenAddress: string; spenderAddress: string } | undefined>
] {
  const { chainId } = useActiveWeb3React()
  const token =
    chainId && NATIVE_CURRENCY_IS_ERC20[chainId]
      ? NATIVE_CURRENCY_IS_ERC20[chainId]
      : amountToApprove?.currency?.isToken
      ? amountToApprove.currency
      : undefined

  // check the current approval status
  const approvalState = useApprovalStateForSpender(amountToApprove, spender, useIsPendingApproval)

  const tokenContract = useTokenContract(token?.address)

  const approve = useCallback(async () => {
    function logFailure(error: Error | string): undefined {
      console.warn(`${token?.symbol || 'Token'} approval failed:`, error)
      return
    }

    // Bail early if there is an issue.
    if (approvalState !== ApprovalState.NOT_APPROVED) {
      return logFailure('approve was called unnecessarily')
    } else if (!chainId) {
      return logFailure('no chainId')
    } else if (!token) {
      return logFailure('no token')
    } else if (!tokenContract) {
      return logFailure('tokenContract is null')
    } else if (!amountToApprove) {
      return logFailure('missing amount to approve')
    } else if (!spender) {
      return logFailure('no spender')
    }

    let useExact = false
    const estimatedGas = await tokenContract.estimateGas.approve(spender, MaxUint256).catch(() => {
      // general fallback for tokens which restrict approval amounts
      useExact = true
      return tokenContract.estimateGas.approve(spender, amountToApprove.quotient.toString())
    })

    return tokenContract
      .approve(spender, useExact ? amountToApprove.quotient.toString() : MaxUint256, {
        gasLimit: calculateGasMargin(estimatedGas),
      })
      .then((response) => ({
        response,
        tokenAddress: token.address,
        spenderAddress: spender,
      }))
      .catch((error: Error) => {
        logFailure(error)
        throw error
      })
  }, [approvalState, token, tokenContract, amountToApprove, spender, chainId])

  return [approvalState, approve]
}
