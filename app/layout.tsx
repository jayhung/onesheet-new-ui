'use client';

import '@/styles/globals.css';

import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  ChartBarIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  HomeIcon,
  Squares2X2Icon,
  CreditCardIcon,
  UserGroupIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Dashboard', href: '/dashboard', icon: Squares2X2Icon },
  { name: 'Templates', href: '#', icon: DocumentDuplicateIcon },
  { name: 'Analytics', href: '#', icon: ChartBarIcon },
  { name: 'Manage Team', href: '#', icon: UserGroupIcon },
  { name: 'Subscription', href: '/pricing', icon: CreditCardIcon },
];

const hideSidebar = ['', '/login', '/signup'];

function classNames({ classes = [] }: { classes?: string[] } = {}) {
  return classes.filter(Boolean).join(' ');
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()?.replace(/\/+$/, '');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <html lang="en">
        <body>
          <Transition.Root show={sidebarOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray-900/80" />
              </Transition.Child>

              <div className="fixed inset-0 flex">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-300"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                        <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                          <span className="sr-only">Close sidebar</span>
                          <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                        </button>
                      </div>
                    </Transition.Child>

                    {/* moble sidebar nav */}
                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10">
                      <div className="flex h-16 shrink-0 items-center">
                        <Link href="/">
                          <Image width="48" height="48" src="/favicon.png" alt="Onesheet" />
                        </Link>
                      </div>
                      <nav className="flex flex-1 flex-col">
                        <ul role="list" className="-mx-2 flex-1 space-y-1">
                          {navigation.map(item => (
                            <li key={item.name}>
                              <a
                                href={item.href}
                                title={item.name}
                                className={classNames({
                                  classes: [
                                    item.href === pathname
                                      ? 'bg-gray-800 text-white'
                                      : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold',
                                  ],
                                })}
                              >
                                <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                              </a>
                            </li>
                          ))}
                        </ul>
                      </nav>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>

          {/* Static sidebar for desktop */}
          {!hideSidebar.includes(pathname ?? '') && (
            <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-50 lg:block lg:w-56 lg:overflow-y-auto lg:bg-gray-900 lg:pb-4 border-r border-gray-700">
              {/* <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col "> */}
              <div className="flex h-16 shrink-0 items-center justify-center">
                <div className="flex h-16 mt-6 shrink-0 items-center justify-center">
                  <Image width="48" height="48" src="/favicon.png" alt="Onesheet" />
                </div>
              </div>
              <nav className="flex flex-1 flex-col mt-8">
                <ul role="list" className="flex flex-1 flex-col gap-y-1">
                  <li>
                    <ul role="list" className="space-y1">
                      {navigation.map(item => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            title={item.name}
                            className={classNames({
                              classes: [
                                item.href === pathname
                                  ? 'bg-gray-800 text-white'
                                  : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                'group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold',
                              ],
                            })}
                          >
                            <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li className="mt-auto">
                    <a
                      href="#"
                      className="group flex gap-x-3 rounded-md p-3 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                    >
                      <Cog6ToothIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
                      Account Settings
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          )}

          {/*remove me in future*/}
          <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-gray-900 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
            <button type="button" className="-m-2.5 p-2.5 text-gray-400 lg:hidden" onClick={() => setSidebarOpen(true)}>
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="flex-1 text-sm font-semibold leading-6 text-white">Dashboard</div>
            <Link href="#">
              <span className="sr-only">Your profile</span>
              <Image
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                className="h-8 w-8 rounded-full bg-gray-800"
                fill
                style={{ objectFit: 'cover' }}
              />
            </Link>
          </div>

          <main className={`${!hideSidebar.includes(pathname ?? '') ? 'lg:pl-56 bg-gray-900' : ''}`}>
            {/* Main area */}
            {children}
          </main>
        </body>
      </html>
    </>
  );
}
