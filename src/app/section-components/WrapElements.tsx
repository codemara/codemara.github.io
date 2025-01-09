import { GiCircuitry } from "react-icons/gi";

interface customList {
    icon : string
    item: string 
    desc: String; 
    
    }

const counter = 0;
    
const Listelmt = (myProps: { zeList: customList }) => {

       return (
            <li className="flex gap-x-3">
            <GiCircuitry className="mt-1 h-5 w-5 flex-none text-skyblue" aria-hidden="true" />
            <span>
              <strong className="font-semibold text-gray-900">{myProps.zeList.item}&nbsp;&nbsp;</strong> 
              {myProps.zeList.desc}
            </span>
          </li>
          )
          
}

export default function wrapElements(myProps:{typeElmt:string, strElmt:string, arrElmt:Array<customList>, counter:number}){
 
    //console.log("type:"+myProps.typeElmt);
    
    //let counter = 0;

    switch (myProps.typeElmt) {
        case "p":
            
            return (
                <p className="mt-8" >{myProps.strElmt}</p>
            )

        case "a":
            return (
                <p><a className="font-medium text-cornflowerblue hover:text-skyblue" href={'http://'+myProps.strElmt} >{myProps.strElmt}</a></p>
            )

        case "sub-title":
            
            return (
                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">{myProps.strElmt}</h2>                
            )

        case "list":
            
            return (
                <ul role="list" className="mt-8 space-y-8 text-gray-600">{ myProps.arrElmt.map((zelist) => ( <Listelmt key={myProps.counter} zeList={zelist} /> ))}</ul>
            )
    
        default:
            return (
                <></>
                )
    }
    
}