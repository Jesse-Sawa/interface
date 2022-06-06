/* eslint-disable */

// import { FACTORY_ADDRESS as V2_FACTORY_ADDRESS } from '@uniswap/v2-sdk'
// import { FACTORY_ADDRESS as V3_FACTORY_ADDRESS } from '@uniswap/v3-sdk'
//
// import { constructSameAddressMap } from '../utils/constructSameAddressMap'
// import { SupportedChainId } from './chains'
//
// type AddressMap = { [chainId: number]: string }
//
// /* Contract Factory Address */
// export const UNI_ADDRESS: AddressMap = constructSameAddressMap('0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984')
//
// /* V2 Contract Addresses*/
// export const V2_FACTORY_ADDRESSES: AddressMap = constructSameAddressMap(V2_FACTORY_ADDRESS)
// export const V2_ROUTER_ADDRESS: AddressMap = constructSameAddressMap('0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D')
//
// // "v3CoreFactoryAddress":"0xAbfC38Ad3BE3618f13dDb29e353047CE3737c2Eb"
// // "multicall2Address":"0x2221FAA59a68aA4B437be1569BF1563C5F401C0D"
// // "swapRouter02":"0x23Bc5Ea94b847d002325D2D8c36F4ffAcB90B246"
// // "quoterV2Address":"0x0D88aE2CF937551e518eb38f5b62644FE6e9CcD0"
// // "nonfungibleTokenPositionManagerAddress":"0x25ef48cfFc49db7594EcB650843848cC7Aea3794"
// // "tickLensAddress":"0x0Ea7Ef05960CdEC93A595c2EE5e31eA8407Fb646"
// // "v3MigratorAddress":"0x3d4930E1ae79464514e022Dbe104FCD14904A1c3"
//
// /* V3 Contract Addresses */
// export const V3_CORE_FACTORY_ADDRESSES: AddressMap = {
//   ...constructSameAddressMap(V3_FACTORY_ADDRESS, [
//     SupportedChainId.OPTIMISM,
//     SupportedChainId.OPTIMISTIC_KOVAN,
//     SupportedChainId.ARBITRUM_ONE,
//     SupportedChainId.ARBITRUM_RINKEBY,
//     SupportedChainId.POLYGON_MUMBAI,
//     SupportedChainId.POLYGON,
//   ]),
//   [SupportedChainId.CELO]: '',
//   [SupportedChainId.CELO_ALFAJORES]: '0xAbfC38Ad3BE3618f13dDb29e353047CE3737c2Eb',
// }
//
// export const V3_ROUTER_ADDRESS: AddressMap = {
//   ...constructSameAddressMap('0xE592427A0AEce92De3Edee1F18E0157C05861564', [
//     SupportedChainId.OPTIMISM,
//     SupportedChainId.OPTIMISTIC_KOVAN,
//     SupportedChainId.ARBITRUM_ONE,
//     SupportedChainId.ARBITRUM_RINKEBY,
//     SupportedChainId.POLYGON,
//     SupportedChainId.POLYGON_MUMBAI,
//   ]),
//   [SupportedChainId.CELO]: '',
//   [SupportedChainId.CELO_ALFAJORES]: '0x9Cf09C0507c99b41Ca875ad5451f25Ca18110A6A',
// }
//
// export const V3_MIGRATOR_ADDRESSES: AddressMap = {
//   ...constructSameAddressMap('0x3d4930E1ae79464514e022Dbe104FCD14904A1c3', [
//     SupportedChainId.ARBITRUM_ONE,
//     SupportedChainId.ARBITRUM_RINKEBY,
//     SupportedChainId.POLYGON_MUMBAI,
//     SupportedChainId.POLYGON,
//   ]),
//   [SupportedChainId.CELO]: '',
//   [SupportedChainId.CELO_ALFAJORES]: '0x3d4930E1ae79464514e022Dbe104FCD14904A1c3',
// }
//
// export const MULTICALL_ADDRESS: AddressMap = {
//   ...constructSameAddressMap('0x2221FAA59a68aA4B437be1569BF1563C5F401C0D', [
//     SupportedChainId.OPTIMISTIC_KOVAN,
//     SupportedChainId.OPTIMISM,
//     SupportedChainId.POLYGON_MUMBAI,
//     SupportedChainId.POLYGON,
//   ]),
//   [SupportedChainId.ARBITRUM_ONE]: '0xadF885960B47eA2CD9B55E6DAc6B42b7Cb2806dB',
//   [SupportedChainId.ARBITRUM_RINKEBY]: '0xa501c031958F579dB7676fF1CE78AD305794d579',
//   [SupportedChainId.CELO]: '',
//   [SupportedChainId.CELO_ALFAJORES]: '0x2221FAA59a68aA4B437be1569BF1563C5F401C0D',
// }
//
// export const SWAP_ROUTER_ADDRESSES: AddressMap = {
//   ...constructSameAddressMap('0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45', [
//     SupportedChainId.OPTIMISM,
//     SupportedChainId.OPTIMISTIC_KOVAN,
//     SupportedChainId.ARBITRUM_ONE,
//     SupportedChainId.ARBITRUM_RINKEBY,
//     SupportedChainId.POLYGON,
//     SupportedChainId.POLYGON_MUMBAI,
//   ]),
//   [SupportedChainId.CELO]: '',
//   [SupportedChainId.CELO_ALFAJORES]: '0x23Bc5Ea94b847d002325D2D8c36F4ffAcB90B246',
// }
//
// /**
//  * The oldest V0 governance address
//  */
// export const GOVERNANCE_ALPHA_V0_ADDRESSES: AddressMap = constructSameAddressMap(
//   '0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F'
// )
// /**
//  * The older V1 governance address
//  */
// export const GOVERNANCE_ALPHA_V1_ADDRESSES: AddressMap = {
//   [SupportedChainId.MAINNET]: '0xC4e172459f1E7939D522503B81AFAaC1014CE6F6',
// }
// /**
//  * The latest governor bravo that is currently admin of timelock
//  */
// export const GOVERNANCE_BRAVO_ADDRESSES: AddressMap = {
//   [SupportedChainId.MAINNET]: '0x408ED6354d4973f66138C91495F2f2FCbd8724C3',
// }
//
// export const TIMELOCK_ADDRESS: AddressMap = constructSameAddressMap('0x1a9C8182C09F50C8318d769245beA52c32BE35BC')
//
// export const MERKLE_DISTRIBUTOR_ADDRESS: AddressMap = {
//   [SupportedChainId.MAINNET]: '0x090D4613473dEE047c3f2706764f49E0821D256e',
// }
//
// export const ARGENT_WALLET_DETECTOR_ADDRESS: AddressMap = {
//   [SupportedChainId.MAINNET]: '0xeca4B0bDBf7c55E9b7925919d03CbF8Dc82537E8',
// }
//
// export const QUOTER_ADDRESSES: AddressMap = {
//   ...constructSameAddressMap('0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6', [
//     SupportedChainId.OPTIMISM,
//     SupportedChainId.OPTIMISTIC_KOVAN,
//     SupportedChainId.ARBITRUM_ONE,
//     SupportedChainId.ARBITRUM_RINKEBY,
//     SupportedChainId.POLYGON_MUMBAI,
//     SupportedChainId.POLYGON,
//   ]),
//   [SupportedChainId.CELO]: '',
//   [SupportedChainId.CELO_ALFAJORES]: '0x0D88aE2CF937551e518eb38f5b62644FE6e9CcD0',
// }
//
// export const NONFUNGIBLE_POSITION_MANAGER_ADDRESSES: AddressMap = {
//   ...constructSameAddressMap('0xC36442b4a4522E871399CD717aBDD847Ab11FE88', [
//     SupportedChainId.OPTIMISM,
//     SupportedChainId.OPTIMISTIC_KOVAN,
//     SupportedChainId.ARBITRUM_ONE,
//     SupportedChainId.ARBITRUM_RINKEBY,
//     SupportedChainId.POLYGON_MUMBAI,
//     SupportedChainId.POLYGON,
//   ]),
//   [SupportedChainId.CELO]: '',
//   [SupportedChainId.CELO_ALFAJORES]: '0x25ef48cfFc49db7594EcB650843848cC7Aea3794',
// }
//
// export const ENS_REGISTRAR_ADDRESSES: AddressMap = {
//   [SupportedChainId.MAINNET]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
//   [SupportedChainId.ROPSTEN]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
//   [SupportedChainId.GOERLI]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
//   [SupportedChainId.RINKEBY]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
// }
//
// export const SOCKS_CONTROLLER_ADDRESSES: AddressMap = {
//   [SupportedChainId.MAINNET]: '0x65770b5283117639760beA3F867b69b3697a91dd',
// }
//
// export const TICK_LENS_ADDRESSES: AddressMap = {
//   [SupportedChainId.ARBITRUM_ONE]: '0xbfd8137f7d1516D3ea5cA83523914859ec47F573',
//   [SupportedChainId.ARBITRUM_RINKEBY]: '0xbfd8137f7d1516D3ea5cA83523914859ec47F573',
//   [SupportedChainId.CELO]: '',
//   [SupportedChainId.CELO_ALFAJORES]: '0x0Ea7Ef05960CdEC93A595c2EE5e31eA8407Fb646',
// }

// {
//   "v3CoreFactoryAddress":"0xFABdaD603E6bdc8Bc7222B2DB7BcDB84e5a0A385",
//   "multicall2Address":"0xE21c99d7dc0810fB44B9583120D46b052C0ef43A",
//   "swapRouter02":"0x9Cf09C0507c99b41Ca875ad5451f25Ca18110A6A"
//   "quoterV2Address":"0x8e7F2915f151b6996fF1E4a4B91cC8940BE1e4E1",
//   "nonfungibleTokenPositionManagerAddress":"0x6535D8Fb26B25D881598B79ec6c6EF2b59e98c47",
//   "tickLensAddress":"0x22f63eB193D53c3277d3C36238c714AC3690cAF3",
//   "v3MigratorAddress":"0x437740563dc8De3B64AE7A3df922581f6B4033DF",
// }

import { FACTORY_ADDRESS as V2_FACTORY_ADDRESS } from '@uniswap/v2-sdk'
import { FACTORY_ADDRESS as V3_FACTORY_ADDRESS } from '@uniswap/v3-sdk'

import { constructSameAddressMap } from '../utils/constructSameAddressMap'
import { SupportedChainId } from './chains'

type AddressMap = { [chainId: number]: string }

/* Contract Factory Address */
export const UNI_ADDRESS: AddressMap = constructSameAddressMap('0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984')

/* V2 Contract Addresses*/
export const V2_FACTORY_ADDRESSES: AddressMap = constructSameAddressMap(V2_FACTORY_ADDRESS)
export const V2_ROUTER_ADDRESS: AddressMap = constructSameAddressMap('0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D')

/* V3 Contract Addresses */
export const V3_ROUTER_ADDRESS: AddressMap = {
  ...constructSameAddressMap('0xE592427A0AEce92De3Edee1F18E0157C05861564', [
    SupportedChainId.OPTIMISM,
    SupportedChainId.OPTIMISTIC_KOVAN,
    SupportedChainId.ARBITRUM_ONE,
    SupportedChainId.ARBITRUM_RINKEBY,
    SupportedChainId.POLYGON,
    SupportedChainId.POLYGON_MUMBAI,
  ]),
  [SupportedChainId.CELO]: '',
  [SupportedChainId.CELO_ALFAJORES]: '0x9Cf09C0507c99b41Ca875ad5451f25Ca18110A6A',
}

export const V3_CORE_FACTORY_ADDRESSES: AddressMap = {
  ...constructSameAddressMap(V3_FACTORY_ADDRESS, [
    SupportedChainId.OPTIMISM,
    SupportedChainId.OPTIMISTIC_KOVAN,
    SupportedChainId.ARBITRUM_ONE,
    SupportedChainId.ARBITRUM_RINKEBY,
    SupportedChainId.POLYGON_MUMBAI,
    SupportedChainId.POLYGON,
  ]),
  [SupportedChainId.CELO]: '',
  [SupportedChainId.CELO_ALFAJORES]: '0xFABdaD603E6bdc8Bc7222B2DB7BcDB84e5a0A385',
}

export const V3_MIGRATOR_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0xA5644E29708357803b5A882D272c41cC0dF92B34', [
    SupportedChainId.ARBITRUM_ONE,
    SupportedChainId.ARBITRUM_RINKEBY,
    SupportedChainId.POLYGON_MUMBAI,
    SupportedChainId.POLYGON,
  ]),
  [SupportedChainId.CELO]: '',
  [SupportedChainId.CELO_ALFAJORES]: '0x437740563dc8De3B64AE7A3df922581f6B4033DF',
}

export const MULTICALL_ADDRESS: AddressMap = {
  ...constructSameAddressMap('0x1F98415757620B543A52E61c46B32eB19261F984', [
    SupportedChainId.OPTIMISTIC_KOVAN,
    SupportedChainId.OPTIMISM,
    SupportedChainId.POLYGON_MUMBAI,
    SupportedChainId.POLYGON,
  ]),
  [SupportedChainId.ARBITRUM_ONE]: '0xadF885960B47eA2CD9B55E6DAc6B42b7Cb2806dB',
  [SupportedChainId.ARBITRUM_RINKEBY]: '0xa501c031958F579dB7676fF1CE78AD305794d579',
  [SupportedChainId.CELO]: '',
  [SupportedChainId.CELO_ALFAJORES]: '0xE21c99d7dc0810fB44B9583120D46b052C0ef43A',
}

export const SWAP_ROUTER_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45', [
    SupportedChainId.OPTIMISM,
    SupportedChainId.OPTIMISTIC_KOVAN,
    SupportedChainId.ARBITRUM_ONE,
    SupportedChainId.ARBITRUM_RINKEBY,
    SupportedChainId.POLYGON,
    SupportedChainId.POLYGON_MUMBAI,
  ]),
  [SupportedChainId.CELO]: '',
  [SupportedChainId.CELO_ALFAJORES]: '0x9Cf09C0507c99b41Ca875ad5451f25Ca18110A6A',
}

/**
 * The oldest V0 governance address
 */
export const GOVERNANCE_ALPHA_V0_ADDRESSES: AddressMap = constructSameAddressMap(
  '0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F'
)
/**
 * The older V1 governance address
 */
export const GOVERNANCE_ALPHA_V1_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0xC4e172459f1E7939D522503B81AFAaC1014CE6F6',
}
/**
 * The latest governor bravo that is currently admin of timelock
 */
export const GOVERNANCE_BRAVO_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0x408ED6354d4973f66138C91495F2f2FCbd8724C3',
}

export const TIMELOCK_ADDRESS: AddressMap = constructSameAddressMap('0x1a9C8182C09F50C8318d769245beA52c32BE35BC')

export const MERKLE_DISTRIBUTOR_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: '0x090D4613473dEE047c3f2706764f49E0821D256e',
}

export const ARGENT_WALLET_DETECTOR_ADDRESS: AddressMap = {
  [SupportedChainId.MAINNET]: '0xeca4B0bDBf7c55E9b7925919d03CbF8Dc82537E8',
}

export const QUOTER_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6', [
    SupportedChainId.OPTIMISM,
    SupportedChainId.OPTIMISTIC_KOVAN,
    SupportedChainId.ARBITRUM_ONE,
    SupportedChainId.ARBITRUM_RINKEBY,
    SupportedChainId.POLYGON_MUMBAI,
    SupportedChainId.POLYGON,
  ]),
  [SupportedChainId.CELO]: '',
  [SupportedChainId.CELO_ALFAJORES]: '0x8e7F2915f151b6996fF1E4a4B91cC8940BE1e4E1',
}

export const NONFUNGIBLE_POSITION_MANAGER_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0xC36442b4a4522E871399CD717aBDD847Ab11FE88', [
    SupportedChainId.OPTIMISM,
    SupportedChainId.OPTIMISTIC_KOVAN,
    SupportedChainId.ARBITRUM_ONE,
    SupportedChainId.ARBITRUM_RINKEBY,
    SupportedChainId.POLYGON_MUMBAI,
    SupportedChainId.POLYGON,
  ]),
  [SupportedChainId.CELO]: '',
  [SupportedChainId.CELO_ALFAJORES]: '0x6535D8Fb26B25D881598B79ec6c6EF2b59e98c47',
}

export const ENS_REGISTRAR_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  [SupportedChainId.ROPSTEN]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  [SupportedChainId.GOERLI]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  [SupportedChainId.RINKEBY]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
}

export const SOCKS_CONTROLLER_ADDRESSES: AddressMap = {
  [SupportedChainId.MAINNET]: '0x65770b5283117639760beA3F867b69b3697a91dd',
}

export const TICK_LENS_ADDRESSES: AddressMap = {
  [SupportedChainId.ARBITRUM_ONE]: '0xbfd8137f7d1516D3ea5cA83523914859ec47F573',
  [SupportedChainId.ARBITRUM_RINKEBY]: '0xbfd8137f7d1516D3ea5cA83523914859ec47F573',
  [SupportedChainId.CELO]: '',
  [SupportedChainId.CELO_ALFAJORES]: '0x22f63eB193D53c3277d3C36238c714AC3690cAF3',
}
