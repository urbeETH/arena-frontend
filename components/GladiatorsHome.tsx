import { useState } from "react";
import { shortenHex } from "../util";

const gladiators = [
    { id: 1, owner: '0x29D7d1dd5B6f9C864d9db560D72a247c178aE86B', status: 'Alive' },
    { id: 2, owner: '0x29D7d1dd5B6f9C864d9db560D72a247c178aE86B', status: 'Alive' },
    { id: 3, owner: '0x29D7d1dd5B6f9C864d9db560D72a247c178aE86B', status: 'Alive' },
    { id: 4, owner: '0x29D7d1dd5B6f9C864d9db560D72a247c178aE86B', status: 'Alive' },
    { id: 5, owner: '0x29D7d1dd5B6f9C864d9db560D72a247c178aE86B', status: 'Alive' },
    { id: 6, owner: '0x29D7d1dd5B6f9C864d9db560D72a247c178aE86B', status: 'Alive' },
    { id: 7, owner: '0x29D7d1dd5B6f9C864d9db560D72a247c178aE86B', status: 'Alive' },
    { id: 8, owner: '0x29D7d1dd5B6f9C864d9db560D72a247c178aE86B', status: 'Alive' },
    { id: 9, owner: '0x29D7d1dd5B6f9C864d9db560D72a247c178aE86B', status: 'Alive' },
    { id: 10, owner: '0x29D7d1dd5B6f9C864d9db560D72a247c178aE86B', status: 'Alive' },
]

const GladiatorsHome = () => {
    const [showTable, setShowTable] = useState(true);
    return (
        <div className="bg-white shadow rounded-lg col-span-1 md:col-span-2 w-full p-4">
            <h3 className="font-bold text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#bb2e66] to-[#87377f]">
                Gladiators
              </span>
            </h3>
            <div className="flex justify-end w-full space-x-2">
              {
                showTable ? <div className="bg-gradient-to-r from-[#bb2e66] to-[#87377f] p-2 shadow rounded-lg cursor-pointer text-white" onClick={() => setShowTable(true)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                  </svg>
                </div> :
                <div className="p-2 shadow rounded-lg cursor-pointer" onClick={() => setShowTable(true)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                  </svg>
                </div>
              }
              {
                !showTable ? <div className="bg-gradient-to-r from-[#bb2e66] to-[#87377f] p-2 shadow rounded-lg cursor-pointer text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                  </svg>
                </div> :
                <div className="p-2 shadow rounded-lg cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={() => setShowTable(false)}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                  </svg>
                </div>
              }
            </div>
            {
                showTable && <div className="mt-4 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                      <table className="min-w-full divide-y divide-gray-300">
                        <thead className="bg-gradient-to-r from-[#bb2e66] to-[#87377f]">
                          <tr className="text-white">
                            <th
                              scope="col"
                              className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide sm:pl-6"
                            >
                              #ID
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide"
                            >
                              Owner
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide"
                            >
                              Status
                            </th>
                            <th scope="col" className="relative py-3 pl-3 pr-4 sm:pr-6">
                              <span className="sr-only">Edit</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                          {gladiators.map((gladiator) => (
                            <tr key={gladiator.id}>
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                {gladiator.id}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm">{shortenHex(gladiator.owner)}</td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm">{gladiator.status}</td>
                              <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                <a href="#" className="text-[#bb2e66] hover:text-[#87377f]">
                                  Attack
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            }
        </div>
    )
}

export default GladiatorsHome;