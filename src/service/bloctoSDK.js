import Web3 from 'web3';
import BloctoSDK from '@blocto/sdk';

export const bloctoSDK = new BloctoSDK({
    ethereum: {
        // (required) chainId to be used
        chainId: '421613', 
        // (required for Ethereum) JSON RPC endpoint
        rpc: 'https://endpoints.omniatech.io/v1/arbitrum/goerli/public',
    },
    appId: '8df47389-0a0e-48dc-ac5d-6c2c9167c854'
});

export const web3 = new Web3(bloctoSDK.ethereum);

export default bloctoSDK;