import { useState, useEffect } from 'react'
import { hooks, metaMask } from '../connectors/metamask';

const ConnectWithMetamask = ({ onConnect }) => {
    const [error, setError] = useState(undefined)

    const connect = () => {
        metaMask
          .activate(undefined)
          .then(() => {
            setError(undefined);
            onConnect();
          })
          .catch(setError)
    }

    return (
        <div 
            className="flex w-full justify-center rounded-md border border-transparent bg-[#bb2e66] border-[#bb2e66] px-4 py-2 text-base font-medium text-[#bb2e66] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#bb2e66] focus:ring-offset-2 sm:text-sm cursor-pointer transition-transform hover:scale-105"
            onClick={() => connect()}
        >
            
            <img src="/metamask.png" />
        </div>
    )
}

export default ConnectWithMetamask;