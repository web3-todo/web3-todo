import { web3 } from './bloctoSDK';
import { CONTRACT_ABI, CONTRACT_ADDRESS }from '../constants/contract'

const contract = new web3.eth.Contract(
    CONTRACT_ABI,
    CONTRACT_ADDRESS
  );
//  const a= new window.ethers.Contract( CONTRACT_ADDRESS , CONTRACT_ABI,provider  )
//  console.log('//',a)
// a.getListSize().then((d)=>console.log('33333',d))

export default contract;