import { Fragment } from 'react'
import { Disclosure, Menu, Popover, Transition } from '@headlessui/react'
import { Bars3Icon, DocumentIcon } from '@heroicons/react/24/outline'
import { AiFillGithub, AiOutlineClose, AiOutlinePhone } from "react-icons/ai";

import Image from 'next/image'

const navigation = [
  { name: 'Automation', href: '#Auto', current: true },
  { name: 'Visualization', href: '#Visual', current: false },
  { name: 'Data Capture', href: '#DataC', current: false },
  { name: 'Spatial Analysis', href: '#Analysis', current: false },
  { name: 'Development', href: '#Deve', current: false },
  { name: 'Marketing', href: '#Market', current: false },
]

const callsToAction = [
    { name: 'GitHub', href: 'https://github.com/codemara/', icon: AiFillGithub },
    {name: 'Resume', href: './GIS/PDF/NDesmarais_resume2024.pdf', icon: DocumentIcon },
    { name: 'Call', href: 'tel:15142434627', icon: AiOutlinePhone },
  ]

function classNames(...classes:string[]) {
  return classes.filter(Boolean).join(' ')
}

export function checkCurrent(checkItem:number){
  if (navigation[checkItem].href == "#" + global.cSection){
    navigation[checkItem].current = true
    return true;
  } else {
    navigation[checkItem].current = false
    return false;
  }

}

export default function MyHeader() {
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
                    className="h-8 w-auto"
                    src="./logo-codemara.svg"
                    alt="codeMARA"
                  />
                </div>
                <div className="hidden md:ml-6 md:block">
                  <div className="flex space-x-4">
                    {navigation.map((item, index) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          checkCurrent(index) ? 'bg-gray-900 text-white' : 'text-gray-600 hover:bg-gray-700 hover:text-white',
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
                            
                            {/* Contact Popover button*/}
                        <Popover.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                          <span className="absolute -inset-0.5" />
                          <span className="sr-only">Close contact menu</span>
                          <AiOutlineClose className="block h-6 w-6" aria-hidden="true" />
                          
                        </Popover.Button>
                            
                            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
                                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-600 lg:mb-8 dark:text-gray-400">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Welcome to codeMARA</h3>
                                    <div className="my-4">Bitter sweet coding</div>
                                </blockquote>
                                <figcaption className="flex items-center justify-center ">

                                    <Image
                                          src="/noemidesmarais_profile.jpg"
                                          className="rounded-full w-36 h-36" 
                                          width={171}
                                          height={171}
                                          alt="Noemi Desmarais"
                                        />

                                    <div className="space-y-1 font-medium dark:text-white text-left rtl:text-right ms-3">
                                        <div>Noemi Desmarais</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400 ">GIS Student & Developer</div>
                                        <div className="text-sm font-light text-gray-500 dark:text-gray-400 ">Calgary, Canada</div>
                                    </div>
                                </figcaption>    
                            </figure>


                            </div>
                            <div className="grid grid-cols-3 divide-x divide-gray-900/5 bg-gray-50">
                            {callsToAction.map((item) => (
                                <a
                                key={item.name}
                                href={item.href}
                                className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100 "
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
              {navigation.map((item, index) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    checkCurrent(index) ? 'bg-gray-900 text-white section-nav' : 'text-gray-600 hover:bg-gray-700 hover:text-white section-nav',
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
