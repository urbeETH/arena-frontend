import { useEffect, useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useWeb3React } from "@web3-react/core";
import ConnectModal from './ConnectModal'
import {  metaMask } from '../connectors/metamask';
import { shortenHex } from '../util';

const Navbar = () => {
  const router = useRouter();
  const { ENSName, account } = useWeb3React();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    metaMask.connectEagerly().catch(() => {
        console.debug('Failed to connect eagerly to metamask')
    })
  }, []);

  return (
    <div className='p-4'>
        <Disclosure as="nav" className="bg-white shadow rounded-lg">
            {({ open }) => (
                <>
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button */}
                        <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#bb2e66]">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                        )}
                        </Disclosure.Button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                        <img
                            className="block h-8 w-auto lg:hidden"
                            src="/logo.png"
                            alt="UrbeArena"
                        />
                        <img
                            className="hidden h-8 w-auto lg:block"
                            src="/logo.png"
                            alt="UrbeArena"
                        />
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                        {/* Current: "border-[#bb2e66] text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                            <Link
                                href="/"
                            >
                                <span className={`cursor-pointer inline-flex items-center justify-center border-b-2 border-${router.pathname === '/' ? '[#bb2e66]' : 'transparent'} px-1 pt-1 text-sm font-medium text-gray-900`}>
                                    Homepage
                                </span>
                            </Link>
                            <Link
                                href="/docs"
                            >
                                <span className={`cursor-pointer inline-flex items-center justify-center border-b-2 border-${router.pathname === '/docs' ? '[#bb2e66]' : 'transparent'} px-1 pt-1 text-sm font-medium text-gray-900`}>
                                    Docs
                                </span>
                            </Link>
                            <Link
                                href="/community"
                            >
                                <span className={`cursor-pointer inline-flex items-center justify-center border-b-2 border-${router.pathname === '/community' ? '[#bb2e66]' : 'transparent'} px-1 pt-1 text-sm font-medium text-gray-900`}>
                                    Community
                                </span>
                            </Link>
                        </div>
                    </div>
                    {
                        !account ? <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <div className='bg-[#bb2e66] px-4 py-2 rounded-lg text-white cursor-pointer' onClick={() => setOpen(true)}>
                                Connect
                            </div>
                        </div> : <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <div className='bg-[#bb2e66] px-4 py-2 rounded-lg text-white cursor-pointer'>
                                { ENSName || shortenHex(account) }
                            </div>
                        </div>
                    }
                    </div>
                </div>

                <Disclosure.Panel className="sm:hidden">
                    <div className="space-y-1 pt-2 pb-4">
                    {/* Current: "bg-red-50 border-[#bb2e66] text-[#87377f]", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                    <Disclosure.Button
                        as="div"
                        className="block border-l-4 border-[#bb2e66] bg-red-50 py-2 pl-3 pr-4 text-base font-medium text-[#87377f]"
                    >
                        <Link href="/">Homepage</Link>
                    </Disclosure.Button>
                    <Disclosure.Button
                        as="div"
                        className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                    >
                        <Link href="/docs">Docs</Link>
                    </Disclosure.Button>
                    <Disclosure.Button
                        as="div"
                        className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                    >
                    <Link href="/community">Community</Link>
                    </Disclosure.Button>
                    </div>
                </Disclosure.Panel>
                </>
            )}
        </Disclosure>
        <ConnectModal open={open} setOpen={(val) => setOpen(val)} />
    </div>
  )
}

export default Navbar;