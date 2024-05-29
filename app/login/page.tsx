const navigation = [
  { name: 'Updates', href: 'https://www.onesheet.club/release-notes' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Login / Signup', href: '/login' },
];

export default function Example() {
  return (
    <>
      {/* Header */}
      <header className="bg-gray-900 absolute inset-x-0 top-0 pl-16 lg:pl-20 z-50">
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

      {/* Login form */}
      <div className="bg-gray-900 py-24 sm:py-32">
        <div id="pricing" className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex min-h-full flex-1">
            <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
              <div className="mx-auto w-full max-w-sm lg:w-96">
                <div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="mx-auto h-10 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=500"
                    alt="Your Company"
                  />
                  <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                    Login to Onesheet
                  </h2>
                  <p>You can now login with your Chartmetric credentials</p>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                  <form className="space-y-6" action="#" method="POST">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                          Password
                        </label>
                        <div className="text-sm">
                          <a href="#" className="font-semibold text-blue-400 hover:text-blue-300">
                            Forgot password?
                          </a>
                        </div>
                      </div>
                      <div className="mt-2">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          required
                          className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                      >
                        Login
                      </button>
                    </div>
                  </form>

                  <p className="mt-10 text-center text-sm text-gray-400">
                    Not a member?{' '}
                    <a href="#" className="font-semibold leading-6 text-blue-400 hover:text-blue-300">
                      Sign up now
                    </a>
                  </p>
                  <p className="mt-6 text-center text-sm text-gray-400">
                    We&apos;ve updated our{' '}
                    <a href="#" className="text-blue-400">
                      Terms of Service
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="relative hidden w-0 flex-1 lg:block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src="https://go.onesheet.club/static/media/social-images.610820ed.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
