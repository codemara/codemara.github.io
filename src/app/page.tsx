'use client'

import NavBox from "./box-css-module//NavBox.svg";
import styles from "./box-css-module/box.module.css";

import  MyHeader from './section-components/MyHeader';
import  MyHomepage from './section-components/MyHomepage';
import  MyFooter from './section-components/MyFooter';
import  MyBentoBox from './section-components/MyBentoBox';



import { useRef  } from 'react';
import { useIntersectionObserver } from 'usehooks-ts'



declare global {
  var cSection: string;
}

const Anchor = (myProps: { title: string }) => {
  const myRef = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(myRef, {})
  const isVisible = !!entry?.isIntersecting

//  console.log(`Render Anchor ${myProps.title}`, { isVisible })
 
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
const Section = (myProps: { title: string }) => {
  const myRef = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(myRef, {})
  const isVisible = !!entry?.isIntersecting


  if ((typeof document !== 'undefined') && isVisible ) {
    //console.log(`Render Section ${myProps.title}`, { isVisible })
    let mySectionNav = document.getElementsByClassName("section-nav")
     if (mySectionNav.length > 0) {
      for (let x = 0; x < mySectionNav.length; x++ ) {
        let condition = '#'+myProps.title == mySectionNav[x].getAttribute('href')
        let classCurrent = (condition) ? 'bg-gray-900 text-white section-nav rounded-md px-3 py-2 text-sm font-medium' : 'text-gray-300 hover:bg-gray-700 hover:text-white section-nav rounded-md px-3 py-2 text-sm font-medium'      
        mySectionNav[x].setAttribute('class', classCurrent)
        global.cSection = myProps.title;
      }
    }
  }
  
  return (
    <><div className="intersection" ref={myRef}>
      &nbsp;
    </div></>
  )
}

type Data = [{
    sup_title: string,
    title: string,
    summary: string,
    img_href: string,
    content: []
}]



export default function Home() {

  return <>

    <MyHeader />
    
    <main>

      <Anchor title='Home' />

        <div className='flex justify-center flex-col m-auto h-screen'>
            <NavBox className={styles.oceanBreeze} />
        </div> 
      
      <section>

      <div id='Auto' className="relative">
        <Section title='Auto' />
        <MyHomepage zeSection='Auto' />
      </div>
      <div>&nbsp;</div>

      <div id='Visual' className="relative">
      <Section title='Visual' />
      <MyHomepage zeSection='Visual' />

      <MyBentoBox />

      </div>
      <div>&nbsp;</div>
   
      <div id='DataC' className="relative">
      <Section title='DataC' />
      <MyHomepage zeSection='DataC' />
      </div>
      <div>&nbsp;</div>
   
      <div id='Analysis' className="relative">
      <Section title='Analysis' />
      <MyHomepage zeSection='Analysis' />
      </div>
      <div>&nbsp;</div>


      <div id='Deve' className="relative">
      <Section title='Deve' />
      <MyHomepage zeSection='Deve' />
      </div>
      <div>&nbsp;</div>


      <div id='Market' className="relative">
      <Section title='Market' />
      <MyHomepage zeSection='Market' />
      </div>
      <div>&nbsp;</div>



      </section>
          
    </main>

    <MyFooter />

    </>
    
}
