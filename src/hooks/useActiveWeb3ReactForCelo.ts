import { useWeb3React } from "web3-react-core";
import { NetworkContextName } from "../constants/misc";
import { CeloProvider } from "./Celo";

export default function useActiveWeb3ReactForCelo() {
  const interfaceContext = useWeb3React<CeloProvider>()
  const interfaceNetworkContext = useWeb3React<CeloProvider>(
    process.env.REACT_APP_IS_WIDGET ? undefined : NetworkContextName
  )

  if (interfaceContext.active) {
    return interfaceContext
  }

  return interfaceNetworkContext
}
