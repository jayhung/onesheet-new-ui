'use client';

import { useRouter } from 'next/navigation';

import { Fragment, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  BellIcon,
  ChevronDownIcon,
  FolderIcon,
  MagnifyingGlassIcon,
  PlusCircleIcon,
  PlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Subscription', href: '#' },
  { name: 'Sign out', href: '#' },
];

const sheets = [
  { type: 'folder', name: 'DJs', image: '' },
  { type: 'folder', name: 'Pop Divas', image: '' },
  {
    type: 'sheet',
    name: 'Danny Tenaglia',
    image: 'https://i.scdn.co/image/ab6761610000e5eb2c6fdf505a6acfd4a96d5862',
    url: 'https://go.onesheet.club/s/5zgv10',
  },
  {
    type: 'sheet',
    name: 'Ghost',
    image: 'https://i.scdn.co/image/ab6761610000e5eb6a6c34bd58bfd10b1e4557f0',
    url: 'https://go.onesheet.club/s/0d9p2j',
  },
  {
    type: 'sheet',
    name: 'Rick Astley',
    image: 'https://i.scdn.co/image/ab6761610000e5ebef34f4cfef524a703ccad877',
    url: 'someurl',
  },
  {
    type: 'sheet',
    name: 'David Solomon',
    image: 'https://i.scdn.co/image/ab6761610000e5ebf5445827540f3cae3c5e5e72',
    url: 'https://go.onesheet.club/s/6mlw0b',
  },
  {
    type: 'sheet',
    name: 'DOMENICO',
    image: 'https://i.scdn.co/image/ab6761610000e5ebc0d6a9d8af8b6b149369b085',
    url: 'https://go.onesheet.club/s/wqcj2v',
  },
  {
    type: 'sheet',
    name: 'Barry Jamieson',
    image: 'https://i.scdn.co/image/ab67616d0000b2732a323ace7637866f4a5808bf',
    url: 'https://go.onesheet.club/s/8rmb5t',
  },
  {
    type: 'sheet',
    name: 'Mipso',
    image: 'https://i.scdn.co/image/ab6761610000e5eb2ef2ec0ca8af74390045bb57',
    url: 'https://go.onesheet.club/s/bha4y5',
  },
  {
    type: 'sheet',
    name: 'Blue October',
    image: 'https://i.scdn.co/image/ab6761610000e5ebfa1af5d87717eb86e31e6a92',
    url: 'https://go.onesheet.club/s/3ads7l',
  },
];

const footerNavigation = {
  solutions: [
    { name: 'Hosting', href: '#' },
    { name: 'Data Services', href: '#' },
    { name: 'Uptime Monitoring', href: '#' },
    { name: 'Enterprise Services', href: '#' },
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Reference', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Page() {
  const router = useRouter();
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-900 border-b border-gray-700">
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      <form className="relative flex flex-1" action="#" method="GET">
                        <label htmlFor="search-field" className="sr-only">
                          Search
                        </label>
                        <MagnifyingGlassIcon
                          className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <input
                          id="search-field"
                          className="block h-full w-full border-0 py-0 pl-8 pr-0 bg-gray-900 text-gray-300 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                          placeholder="Search..."
                          type="search"
                          name="search"
                        />
                      </form>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    <button
                      type="button"
                      className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 pr-2 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                          <span className="hidden lg:flex lg:items-center">
                            <span className="ml-4 text-sm font-semibold leading-3 text-gray-400" aria-hidden="true">
                              {user.name}
                            </span>
                            <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                          </span>
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {userNavigation.map(item => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <a
                                  href={item.href}
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  {item.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {userMenuOpen ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </>
        </Disclosure>
      </div>

      {/* Sheets Grid */}
      <div className="bg-gray-900 py-24 sm:py-20">
        <div className="text-center text-xl">
          <a className="text-gray-300 hover:text-white" href="/pricing">
            For a limited time, click here to upgrade and receive a 50% discount on your first 6 months.
          </a>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py:12 sm:py-8">
          <div>
            <div className="float-right">
              <span className="text-sm text-gray-300 font-light mr-4">8 of 10 allowed sheets have been created</span>
              <button
                type="button"
                className="relative rounded-md bg-orange-400 p-1 text-white hover:bg-orange-400 mr-4"
                onClick={() => router.push('/pricing')}
              >
                <span className="flex px-2">
                  <PlusCircleIcon className="h-6 w-6" aria-hidden="true" />
                  Upgrade
                </span>
              </button>
            </div>
            <h1 className="text-2xl font-bold my-8 text-blue-400">Your Onesheets </h1>
            <ul role="list" className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mb-6">
              {sheets &&
                sheets.map((sheet, index) => (
                  <li
                    key={index}
                    className="col-span-1 flex flex-col divide-y divide-gray-700 rounded-lg ring-1 ring-gray-700 bg-white text-center shadow"
                    style={{
                      background: `url(${sheet.image}) center top / cover no-repeat`,
                    }}
                  >
                    <a
                      href="#"
                      type="button"
                      className="items-center rounded-md p-4 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                    >
                      <div className="flex flex-1 flex-col h-32">
                        <h3
                          className="font-medium text-xl text-gray-100 text-left px-2 line-clamp-3"
                          style={{ textShadow: '2px 2px 3px #000' }}
                        >
                          {sheet.name}
                        </h3>
                        {sheet.type === 'folder' && (
                          <div className="text-center mx-auto my-auto">
                            <FolderIcon className="h-12 w-12 text-2xl text-gray-300" aria-hidden="true" />
                          </div>
                        )}
                      </div>
                    </a>
                    <div className="flex flex-1 bg-gray-300 rounded-b-md p-2">
                      <span className="py-1 px-4 bg-gray-200 text-gray-900 rounded-md">Share</span>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 mx-auto mt-40 max-w-7xl px-6">
        <footer aria-labelledby="footer-heading" className="relative border-t border-gray-300/20 py-12">
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
          <div className="flex justify-center items-center border-t border-gray-900/10 pt-4">
            <p className="text-sm p-2 text-gray-400">&copy; {new Date().getFullYear()} Onesheet by Chartmetric</p>
          </div>
        </footer>
      </div>
    </>
  );
}
