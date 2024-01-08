import { Fragment } from 'react'

import { GiCircuitry } from "react-icons/gi";


interface customList {
    icon : string
    item: string 
    desc: String; 
    
    }

const counter = 0;
    
const Listelmt = (props: { zeList: customList }) => {

       return (
            <li className="flex gap-x-3">
            <GiCircuitry className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
            <span>
              <strong className="font-semibold text-gray-900">{props.zeList.item}&nbsp;&nbsp;</strong> 
              {props.zeList.desc}
            </span>
          </li>
          )
          
}

export default function wrapElements(props:{typeElmt:string, strElmt:string, arrElmt:Array<customList>, counter:number}){
 
    //console.log("type:"+props.typeElmt);
    
    let counter = 0;

    switch (props.typeElmt) {
        case "p":
            
            return (
                <p className="mt-8" >{props.strElmt}</p>
            )

        case "a":
            return (
                <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href={'http://'+props.strElmt} >{props.strElmt}</a>
            )

        case "sub-title":
            
            return (
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">{props.strElmt}</h2>                
            )

        case "list":
            
            return (
                <ul role="list" className="mt-8 space-y-8 text-gray-600">{ props.arrElmt.map((zelist) => ( <Listelmt key={props.counter} zeList={zelist} /> ))}</ul>
            )
    
        default:
            return (
                <></>
                )
    }
    
}