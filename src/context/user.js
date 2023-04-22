import { createContext, useContext, useEffect, useRef, useState } from 'react';
import bloctoSDK from '../service/bloctoSDK';

const UserContext = createContext({});

export function UserProvider({children}) {
    const isInit = useRef(false);
    const [address, setAddress] = useState('');

    useEffect(() => {
        if(!isInit.current) {
            bloctoSDK.ethereum.request({ method: 'eth_requestAccounts' })
                .then((accounts) => setAddress(accounts[0]));
            isInit.current = true;
        }
    },[]);

    return (
      <UserContext.Provider value={{address}}>
        {children}
      </UserContext.Provider>
    )
  }


export const useUser = () => useContext(UserContext);