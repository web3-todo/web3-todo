import Web3 from 'web3';
import BloctoSDK from '@blocto/sdk';

export const bloctoSDK = new BloctoSDK({
    ethereum: {
        // (required) chainId to be used
        chainId: '80001', 
        // (required for Ethereum) JSON RPC endpoint
        rpc: 'https://polygon-testnet.public.blastapi.io',
    },
});

export const web3 = new Web3(bloctoSDK.ethereum);

export default bloctoSDK;