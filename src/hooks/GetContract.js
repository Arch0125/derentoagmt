import { useContract, useProvider, useSigner } from 'wagmi'
import GetAccount from './GetAccount'
import AgreementABI from '../components/contracts/ABI/AgreementABI.json'

function GetContract() {
  const provider = useProvider()
  const{data:signer}=useSigner();
  const contract = useContract({
    addressOrName: '0x8fd9E6b2f8A42aFE5Fdb317431A1fc07DaF788da',
    contractInterface: AgreementABI,
    signerOrProvider: signer,
  })

  return contract

}

export default GetContract