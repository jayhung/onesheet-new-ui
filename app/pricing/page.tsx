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
  { name: 'Updates', href: 'https://www.onesheet.club/release-notes' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'FAQ', href: 'https://help.chartmetric.com/en/collections/5676746-onesheet' },
  { name: 'Login / Signup', href: 'https://go.onesheet.club/' },
];

const frequencies = [
  { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
  { value: 'annually', label: 'Annually', priceSuffix: '/year' },
];

const tiers = [
  {
    name: 'Lite',
    id: 'tier-lite',
    href: '#',
    price: { monthly: 'Free', annually: 'Free' },
    callout: { monthly: '', annually: '' },
    description: 'For your basic needs',
    features: ['Up to 3 Onesheets', 'Basic online support', 'Basic Onesheet functionality'],
    mostPopular: false,
  },
  {
    name: 'Standard',
    id: 'tier-standard',
    href: '#',
    price: { monthly: '0', annually: '0' },
    callout: { monthly: '', annually: 'Save 20%!' },
    description: 'Need more Onesheets?',
    features: ['Up to 3 Onesheets', 'Basic online support', 'Basic Onesheet functionality'],
    mostPopular: true,
  },
  {
    name: 'Pro',
    id: 'tier-pro',
    href: '#',
    price: { monthly: '50', annually: '500' },
    callout: { monthly: '', annually: 'Save 20%!' },
    description: 'For businesses and pros',
    features: [
      'Up to 3 Onesheets',
      'Priority online support',
      'Advanced Onesheet functionality',
      'Add contact details',
      'Custom URL',
      'PDF exports',
      'Integrate audio links',
      'Password protection',
      'Viewer analytics',
      'Change Onesheet color scheme',
    ],
    mostPopular: false,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    price: { monthly: 'Contact Us', annually: 'Contact Us' },
    callout: { monthly: '', annually: '' },
    description: 'Full control and customization',
    features: [
      'Subscribe for more than 100 Onesheets',
      'Priority online support',
      'Advanced Onesheet functionality',
      'Add contact details',
      'Custom URL',
      'PDF exports',
      'Integrate audio links',
      'Password protection',
      'Viewer analytics',
      'Change Onesheet color scheme',
      'Invite your whole team with Team Accounts',
      'Admin access control',
      'Brand with logo',
      'Save templates',
      'Custom domain name',
    ],
    mostPopular: false,
  },
];

const pricePerSheet = 1;

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
  const [frequency, setFrequency] = useState(frequencies[0]);
  const [numSheets, setNumSheets] = useState(10);

  // @ts-ignore
  const handleSheetsChange = e => {
    setNumSheets(e.target.value);
  };

  return (
    <>
      {/* Header */}
      <header className="bg-gray-900 absolute inset-x-0 top-0 pl-16 lg:pl-56 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8 border-b border-gray-700" aria-label="Global">
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

      {/* Pricing section */}
      <div className="bg-gray-900 py-24 sm:py-32">
        <div id="pricing" className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-400">Onesheet Pricing</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">Free to use.</p>
            <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Subscribe for enhanced features.
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-xl leading-8 text-gray-300">
            Use our Lite plan for as long as you like. Or enjoy more sheets as well as advanced premium features by
            upgrading to one of our subscription plans.
          </p>
          <div className="mt-16 flex justify-center">
            <RadioGroup
              value={frequency}
              onChange={setFrequency}
              className="grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs font-semibold leading-5 text-white"
            >
              <RadioGroup.Label className="sr-only">Payment frequency</RadioGroup.Label>
              {frequencies.map(option => (
                <RadioGroup.Option
                  key={option.value}
                  value={option}
                  className={({ checked }) =>
                    classNames(checked ? 'bg-blue-500' : '', 'cursor-pointer rounded-full px-2.5 py-1')
                  }
                >
                  <span>{option.label}</span>
                </RadioGroup.Option>
              ))}
            </RadioGroup>
          </div>
          <div className="flex flex-col space-y-2 max-w-4xl mx-auto p-10">
            <p className="font-semibold text-center py-4">Choose number of sheets:</p>
            <input
              type="range"
              className="w-full"
              min="10"
              max="100"
              step="10"
              value={numSheets}
              onChange={handleSheetsChange}
            />
            <ul className="flex justify-between w-full px-[10px]">
              <li className="flex justify-center relative">
                <span className="absolute">10</span>
              </li>
              <li className="flex justify-center relative">
                <span className="absolute">20</span>
              </li>
              <li className="flex justify-center relative">
                <span className="absolute">30</span>
              </li>
              <li className="flex justify-center relative">
                <span className="absolute">40</span>
              </li>
              <li className="flex justify-center relative">
                <span className="absolute">50</span>
              </li>
              <li className="flex justify-center relative">
                <span className="absolute">60</span>
              </li>
              <li className="flex justify-center relative">
                <span className="absolute">70</span>
              </li>
              <li className="flex justify-center relative">
                <span className="absolute">80</span>
              </li>
              <li className="flex justify-center relative">
                <span className="absolute">90</span>
              </li>
              <li className="flex justify-center relative">
                <span className="absolute">100</span>
              </li>
            </ul>
          </div>
          <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-4 sm:grid-cols-2">
            {tiers.map(tier => (
              <div
                key={tier.id}
                className={classNames(
                  tier.mostPopular ? 'bg-white/5 ring-2 ring-blue-500' : 'ring-1 ring-white/10',
                  'rounded-3xl p-8 xl:p-10'
                )}
              >
                <div className="flex items-center justify-between gap-x-4">
                  <h3 id={tier.id} className="text-lg font-semibold leading-8 text-white">
                    {tier.name}
                  </h3>
                  {tier.mostPopular ? (
                    <p className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold leading-5 text-gray-900">
                      Most popular
                    </p>
                  ) : null}
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-300">{tier.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-3xl font-bold tracking-tight text-white">
                    {!['tier-lite', 'tier-enterprise'].includes(tier.id)
                      ? '$' +
                        (parseInt(tier.price[frequency.value as keyof typeof tier.price]) + numSheets * pricePerSheet)
                      : tier.price[frequency.value as keyof typeof tier.price]}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-gray-300">
                    {!['tier-lite', 'tier-enterprise'].includes(tier.id) && frequency.priceSuffix}
                  </span>
                </p>
                <p className="flex-1 text-sm italic text-gray-400">
                  {tier.callout[frequency.value as keyof typeof tier.callout]}
                </p>{' '}
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={classNames(
                    tier.mostPopular
                      ? 'bg-blue-500 text-gray-900 shadow-sm hover:bg-blue-400 focus-visible:outline-indigo-300'
                      : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white',
                    'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                  )}
                >
                  {tier.id === 'tier-lite' ? 'Included' : 'Subscribe'}
                </a>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
                  {tier.features.map(feature => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon className="h-6 w-5 flex-none text-white" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Logo cloud */}
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-white">
            Trusted by the world’s most innovative teams
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg"
              alt="Reform"
              width={158}
              height={48}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg"
              alt="Tuple"
              width={158}
              height={48}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg"
              alt="SavvyCal"
              width={158}
              height={48}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg"
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
          <div className="mt-16 flex justify-center">
            <p className="relative rounded-full bg-gray-800 px-4 py-1.5 text-sm leading-6 text-gray-300">
              <span className="hidden md:inline">Over 2500 companies use our tools to better their business.</span>
              <a href="#" className="font-semibold text-white">
                <span className="absolute inset-0" aria-hidden="true" /> Read our customer stories{' '}
                <span aria-hidden="true">&rarr;</span>
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <section className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="h-12 self-start" src="https://tailwindui.com/img/logos/tuple-logo-white.svg" alt="" />
              <figure className="mt-10 flex flex-auto flex-col justify-between">
                <blockquote className="text-lg leading-8 text-white">
                  <p>
                    “Amet amet eget scelerisque tellus sit neque faucibus non eleifend. Integer eu praesent at a. Ornare
                    arcu gravida natoque erat et cursus tortor consequat at. Vulputate gravida sociis enim nullam
                    ultricies habitant malesuada lorem ac. Tincidunt urna dui pellentesque sagittis.”
                  </p>
                </blockquote>
                <figcaption className="mt-10 flex items-center gap-x-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="h-14 w-14 rounded-full bg-gray-800"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div className="text-base">
                    <div className="font-semibold text-white">Judith Black</div>
                    <div className="mt-1 text-gray-400">CEO of Tuple</div>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="flex flex-col border-t border-white/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="h-12 self-start" src="https://tailwindui.com/img/logos/reform-logo-white.svg" alt="" />
              <figure className="mt-10 flex flex-auto flex-col justify-between">
                <blockquote className="text-lg leading-8 text-white">
                  <p>
                    “Excepteur veniam labore ullamco eiusmod. Pariatur consequat proident duis dolore nulla veniam
                    reprehenderit nisi officia voluptate incididunt exercitation exercitation elit. Nostrud veniam sint
                    dolor nisi ullamco.”
                  </p>
                </blockquote>
                <figcaption className="mt-10 flex items-center gap-x-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="h-14 w-14 rounded-full bg-gray-800"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div className="text-base">
                    <div className="font-semibold text-white">Joseph Rodriguez</div>
                    <div className="mt-1 text-gray-400">CEO of Reform</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

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
