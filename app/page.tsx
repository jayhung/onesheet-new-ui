'use client';

import { useState } from 'react';
import { Dialog, RadioGroup } from '@headlessui/react';
import {
  ArrowPathIcon,
  ArrowUpTrayIcon,
  Bars3Icon,
  BoltIcon,
  PencilSquareIcon,
  ShareIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { CheckIcon } from '@heroicons/react/20/solid';

import Image from 'next/image';
import Link from 'next/link';

const navigation = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Updates', href: 'https://www.onesheet.club/release-notes' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Login / Signup', href: '/login' },
];

const features = [
  {
    name: 'Create a Onesheet in seconds',
    description: 'Fast and simple to create. Generate your onesheet in just a few clicks.',
    icon: BoltIcon,
  },
  {
    name: 'Search artists on Spotify',
    description: "We'll pull in all the data you need to generate a beautiful onesheet.",
    icon: ShareIcon,
  },
  {
    name: 'Fully customizable',
    description:
      "Edit your sheet to suit your audience. Move content around, add custom imagery and hide data you don't need",
    icon: ArrowUpTrayIcon,
  },
  {
    name: 'Stats update automatically',
    description: "Say goodbye to constantly updating stats. We'll pull the latest data every time you open a sheet.",
    icon: ArrowPathIcon,
  },
  {
    name: 'Share with anyone',
    description:
      'No need to worry about them having the right software to open it. Quickly create multiple versions for different audiences.',
    icon: ArrowUpTrayIcon,
  },
  {
    name: 'Share your music',
    description:
      'Highlight your new tracks and play them directly on your sheet! Connect your songs from YouTube, SoundCloud, AudioMack, or Vimeo.',
    icon: ArrowPathIcon,
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

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="absolute inset-x-0 top-0 pl-16 lg:pl-20 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <span className="sr-only">Onesheet</span>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map(item => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-100">
                {item.name}
              </a>
            ))}
          </div>
          <div className="lg:flex lg:flex-1 lg:justify-end"></div>
        </nav>
      </header>

      <div className="isolate">
        {/* Hero section */}
        <div className="relative pt-14">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#575be9] to-[#5089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  Create beautiful artist Onesheets in seconds
                </h1>
                <p className="mt-6 text-2xl leading-8 text-gray-300">
                  We pull data from Chartmetric to build stunning web pages in seconds that stay up-to-date. Get started
                  for free or for a limited time upgrade and receive 50% discount on your first 6 months!
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Link
                    href="/docs/getting-started"
                    className="rounded-md bg-blue-500 hover:bg-blue-400 px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get started
                  </Link>
                  <Link href="#" className="text-sm font-semibold leading-6 text-gray-300">
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/sheet-sza.jpg"
                    alt="App screenshot"
                    className="rounded-md shadow-2xl ring-1 ring-gray-300/10"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#575be9] to-[#5089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>

        {/* Feature section */}
        <div className="mx-auto max-w-7xl px-6 pb-32">
          <div className="mx-auto mt-20 max-w-2xl lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map(feature => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-300">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500">
                      <feature.icon className="h-6 w-6 text-gray-900" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-400">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mx-auto mt-40 max-w-7xl px-6">
        <footer aria-labelledby="footer-heading" className="relative border-t border-gray-300/20 py-12">
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
          <div className="flex justify-center items-center border-t border-gray-900/10 pt-4">
            <Image width="40" height="40" src="/img/app-icon.png" alt="Onesheet" />
            <p className="text-sm p-2 text-gray-400">&copy; {new Date().getFullYear()} Onesheet</p>
          </div>
        </footer>
      </div>
    </>
  );
}
