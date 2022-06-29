import { useAccount } from 'wagmi'

function GetAccount() {
  const { address, isConnecting, isDisconnected } = useAccount()

  return address
}

export default GetAccount