import { Fragment } from 'react'

import { GiCircuitry } from "react-icons/gi";


interface customList {
    icon : string
    item: string 
    desc: String; 
    
    }

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

export default function wrapElements(props:{typeElmt:string, embElmt:any}){

    const customElmtList: Array<customList> = (props.typeElmt == "list") ? props.embElmt : undefined;
    
    const isTypeP = (props.typeElmt=="p") ? true : false;
    const isTypeH = (props.typeElmt=="sub_title") ? true : false;
    const isTypeA = (props.typeElmt=="a") ? true : false;
 
    return (
        (customElmtList == undefined) ? 
            (isTypeP) ? <p className="mt-8" >{props.embElmt}</p> : 
                (isTypeH) ? <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">{props.embElmt}</h2> :
                    (isTypeA) ? <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href={'http://'+props.embElmt} >{props.embElmt}</a> : ""
            :
            <ul role="list" className="mt-8 space-y-8 text-gray-600">
                { customElmtList.map((item) => (
                    <Listelmt zeList={item} />
                ))}       
            </ul>
    )


}