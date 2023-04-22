import { web3 } from './bloctoSDK';
import { CONTRACT_ABI, CONTRACT_ADDRESS }from '../constants/contract'

const contract = new web3.eth.Contract(
    CONTRACT_ABI,
    CONTRACT_ADDRESS
  );

export default contract;