'use client'


import NavBox from "./box-css-module//NavBox.svg";
import styles from "./box-css-module/box.module.css";

import  Headersmenu from './headers-menu/Headersmenu';
import  MyHomepage from './section-components/MyHomepage';

import { useRef  } from 'react';
import { useIntersectionObserver } from 'usehooks-ts'
//import { promises as fs } from 'fs';


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
    console.log(`Render Section ${props.title}`, { isVisible })
    let mySectionNav = document.getElementsByClassName("section-nav")
     if (mySectionNav.length > 0) {
      for (let x = 0; x < mySectionNav.length; x++ ) {
        //console.log("ICI+"+mySectionNav[x].innerHTML);
        let classCurrent = ('#'+props.title == mySectionNav[x].getAttribute('href')) ? 'bg-gray-900 text-white section-nav rounded-md px-3 py-2 text-sm font-medium' : 'text-gray-300 hover:bg-gray-700 hover:text-white section-nav rounded-md px-3 py-2 text-sm font-medium'      
        mySectionNav[x].setAttribute('class', classCurrent)
      }
    }
  }
  
  return (
    <><div id={props.title} ref={myRef}>
      <MyHomepage zeSection={props.title} />
    </div><div>&nbsp;</div></>
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

 //console.log(data);

  return <>
    <Headersmenu />
    
    <main>

      <Anchor title='Home' />

        <div className='flex justify-center flex-col m-auto h-screen'>
            <NavBox className={styles.oceanBreeze} />
        </div> 
      
      <Section title='Agri' />

      <Section title='Front' />

      <Section title='Back' />

      <Section title='Market' />

      <Section title='Mobile' />

      <Section title='Integ' />
          </main>
    </>
    
}
