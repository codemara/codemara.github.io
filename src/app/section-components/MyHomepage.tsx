import { Agri, Front, Back, Market, Mobile, Integ } from "@/public/contents.json"

import WrapElements from "@/src/app/section-components/WrapElements"

interface ObjSection {
  [key: string]: any; 
  }

interface ObjContent {
    type: string
    embed: any
}
interface customList {
  icon : string
  item: string 
  desc: String; 
  
  }
const objSection:ObjSection = {"Agri": Agri, "Front": Front, "Back": Back, "Market": Market, "Mobile": Mobile, "Integ": Integ}

const Localcontent = (props: { zecontent : Array<ObjContent> } ) => {

  const myLocalJSX: JSX.Element[] = [];
  
  let typelm = ""
  let strlm = ""
  let arrlm = new Array<customList>
  var counter = 0;

  for (counter; counter < props.zecontent.length;counter++){
    let item = props.zecontent[counter];
    typelm = item.type;
    strlm = (item.type != 'list') ? item.embed + "" : ""
    arrlm = (item.type+"" == 'list') ? item.embed : new Array<customList>
    
    myLocalJSX.push(<WrapElements typeElmt={typelm} strElmt={strlm} arrElmt={arrlm} counter={counter}  />)
   
  }

  return(
    myLocalJSX
  )

  }


export default function MyHomepage(props: { zeSection: string }) {

 const localData = objSection[props.zeSection];

  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="backgroundSvg"
              width={328}
              height={369}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M164,285
                      V96
                      M0,0
                      L164,96
                      L328,0
                      M0,370
                      L164,285
                      L328,370
                      Z"
              fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-white">
            <path
              d="M-100,0
              L64,-96
              L228,0
              L228,189
              L64,285
              L-100,189
              V0
              Z
              
              M700,0
              L864,-96
              L1028,0
              L1028,189
              L864,285
              L700,189
              V0
              Z
              M500,400
              L664,304
              L828,400
              L828,589
              L664,685
              L500,589
              V400
              Z
              
              M-300,600
              L-136,504
              L28,600
              L28,789
              L-136,885
              L-300,789
              V600
              Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#backgroundSvg)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-1 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-1">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">{localData.sup_title}</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{localData.title}</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                {localData.summary}
              </p>
            </div>
          </div>
        </div>
  
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-800 rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src={localData.img_href}
            alt=""
          />
        </div>

        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">

               <Localcontent zecontent={localData.content}  />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
