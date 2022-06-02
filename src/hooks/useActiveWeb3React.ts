/* eslint-disable */
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from 'web3-react-core'

import { SupportedChainId } from '../constants/chains'
import { NetworkContextName } from '../constants/misc'
import { CeloProvider } from './Celo'

export default function useActiveWeb3React() {
  const { chainId } = useActiveWeb3ReactWithWeb3Provider()

  if (chainId && [SupportedChainId.CELO, SupportedChainId.CELO_ALFAJORES].includes(chainId)) {
    const interfaceContext = useWeb3React<Web3Provider>()
    const interfaceNetworkContext = useWeb3React<Web3Provider>(
      process.env.REACT_APP_IS_WIDGET ? undefined : NetworkContextName
    )

    if (interfaceContext.active) {
      return interfaceContext
    }

    return interfaceNetworkContext
  }

  return useActiveWeb3ReactWithWeb3Provider()
}

export function useActiveWeb3ReactWithWeb3Provider() {
  const interfaceContext = useWeb3React<Web3Provider>()
  const interfaceNetworkContext = useWeb3React<Web3Provider>(
    process.env.REACT_APP_IS_WIDGET ? undefined : NetworkContextName
  )

  if (interfaceContext.active) {
    return interfaceContext
  }

  return interfaceNetworkContext
}
