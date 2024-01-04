'use client'

import Image from 'next/image'

import NavBox from "./box-css-module//NavBox.svg";

import styles from "./box-css-module/box.module.css";

import { useRef  } from 'react';

import { useIntersectionObserver } from 'usehooks-ts'

import  Headersmenu from './headers-menu/Headersmenu';
import  Homepage from './section-components/homepage';


const Anchor = (props: { title: string }) => {
  const myRef = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(myRef, {})
  const isVisible = !!entry?.isIntersecting

  console.log(`Render Anchor ${props.title}`, { isVisible })
  if (typeof document !== 'undefined') {
    let myStickyHeader = document.getElementsByTagName("header");
    //console.log(myStickyHeader);
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

  console.log(`Render Section ${props.title}`, { isVisible })

  return (
    <div id={props.title} ref={myRef} >
        <Homepage />
    </div>
  )
}

export default function Home() {
  return <>
    <main>
      <Headersmenu />

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
