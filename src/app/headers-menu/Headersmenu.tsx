import { Fragment } from 'react'
import { Disclosure, Menu, Popover, Transition } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { AiFillGithub, AiOutlineClose, AiOutlinePhone } from "react-icons/ai";

const navigation = [
  { name: 'Agritech', href: '#Agri', current: true },
  { name: 'Front-End', href: '#Front', current: false },
  { name: 'Back-End', href: '#Back', current: false },
  { name: 'Marketing', href: '#Market', current: false },
  { name: 'Mobile App', href: '#Mobile', current: false },
  { name: 'Integrations', href: '#Integ', current: false },
]

const callsToAction = [
    { name: 'GitHub', href: 'https://github.com/codemara/', icon: AiFillGithub },
    { name: 'Call', href: 'tel:15142434627', icon: AiOutlinePhone },
  ]

function classNames(...classes:string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Headersmenu() {
  return (
    <Disclosure as="nav" className="bg-gray-80 ">
      {({ open }) => (
        <>
        <header id="headerMenu" className="z-50 bg-white fixed top-0 w-full hidden">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <AiOutlineClose className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto invert"
                    src="./codemara.svg"
                    alt="codeMARA"
                  />
                </div>
                <div className="hidden md:ml-6 md:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white section-nav' : 'text-gray-300 hover:bg-gray-700 hover:text-white section-nav',
                          'rounded-md px-3 py-2 text-sm font-medium section-nav'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                
                {/* Contact dropdown */}
                <Menu as="div" className="relative ml-3">
        
                    <div className=" lg:flex lg:flex-1 lg:justify-end">
                    <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                        Contact
                        </Popover.Button>

                        <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                        >
                        <Popover.Panel className="absolute -right-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                            <div className="p-4">
                            ...
                            </div>
                            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                            {callsToAction.map((item) => (
                                <a
                                key={item.name}
                                href={item.href}
                                className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                                >
                                <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                                {item.name}
                                </a>
                            ))}
                            </div>
                        </Popover.Panel>
                        </Transition>
                    </Popover>
                    </div>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white section-nav' : 'text-gray-300 hover:bg-gray-700 hover:text-white section-nav',
                    'block rounded-md px-3 py-2 text-base font-medium section-nav'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
          </header>
        </>
      )}
    </Disclosure>
  )
}
