'use client'


import NavBox from "./box-css-module//NavBox.svg";
import styles from "./box-css-module/box.module.css";

import  Headersmenu from './headers-menu/Headersmenu';
import  MyHomepage from './section-components/MyHomepage';

import { useRef  } from 'react';
import { useIntersectionObserver } from 'usehooks-ts'
//import { promises as fs } from 'fs';

declare global {
  var cSection: string;
}

const Anchor = (props: { title: string }) => {
  const myRef = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(myRef, {})
  const isVisible = !!entry?.isIntersecting

//  console.log(`Render Anchor ${props.title}`, { isVisible })
 
if (typeof document !== 'undefined') {
    let myStickyHeader = document.getElementsByTagName("header");
    if (myStickyHeader != null && myStickyHeader[0] != undefined) {
      if (isVisible) {
        myStickyHeader[0].classList.remove("hidden")
      } else {
        if (!myStickyHeader[0].classList.contains("hidden")){
          myStickyHeader[0].classList.add("hidden");
        }
      }    
    }
  }

  return (
    <div id="anchor" ref={myRef} >
        &nbsp;
    </div>
  )
}

const Section = (props: { title: string }) => {
  const myRef = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(myRef, {})
  const isVisible = !!entry?.isIntersecting


  if ((typeof document !== 'undefined') && isVisible ) {
    //console.log(`Render Section ${props.title}`, { isVisible })
    let mySectionNav = document.getElementsByClassName("section-nav")
     if (mySectionNav.length > 0) {
      for (let x = 0; x < mySectionNav.length; x++ ) {
        let condition = '#'+props.title == mySectionNav[x].getAttribute('href')
        let classCurrent = (condition) ? 'bg-gray-900 text-white section-nav rounded-md px-3 py-2 text-sm font-medium' : 'text-gray-300 hover:bg-gray-700 hover:text-white section-nav rounded-md px-3 py-2 text-sm font-medium'      
        mySectionNav[x].setAttribute('class', classCurrent)
        global.cSection = props.title;
      }
    }
  }
  
  return (
    <><div className="intersection" ref={myRef}>
      &nbsp;
    </div></>
  )
}


///import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
 
type Data = [{
    sup_title: string,
    title: string,
    summary: string,
    img_href: string,
    content: []
}]

export default function Home() {

  return <>

    <Headersmenu />
    
    <main>

      <Anchor title='Home' />

        <div className='flex justify-center flex-col m-auto h-screen'>
            <NavBox className={styles.oceanBreeze} />
        </div> 
      
      <div id='Agri' className="relative">
        <Section title='Agri' />
        <MyHomepage zeSection='Agri' />
      </div>
      <div>&nbsp;</div>

      <div id='Front' className="relative">
      <Section title='Front' />
      <MyHomepage zeSection='Front' />
      </div>
      <div>&nbsp;</div>


      <div id='Back' className="relative">
      <Section title='Back' />
      <MyHomepage zeSection='Back' />
      </div>
      <div>&nbsp;</div>


      <div id='Market' className="relative">
      <Section title='Market' />
      <MyHomepage zeSection='Market' />
      </div>
      <div>&nbsp;</div>


      <div id='Mobile' className="relative">
      <Section title='Mobile' />
      <MyHomepage zeSection='Mobile' />
      </div>
      <div>&nbsp;</div>


      <div id='Integ' className="relative">
      <Section title='Integ' />
      <MyHomepage zeSection='Integ' />
      </div>
      <div>&nbsp;</div>
   
          </main>





      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl">
       
    <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2023 <a href="https://codemara.com/">codeMARA</a>
        </span>
        <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            
              <a href="https://github.com/codemara/codemara.github.io" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                  </svg>
                  <span className="sr-only">GitHub account</span>
              </a>
              
        </div>
      </div>
    </div>
</footer>


    </>
    
}
