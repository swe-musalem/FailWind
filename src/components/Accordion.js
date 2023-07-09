import { useState } from "react"
import { LiaAngleDownSolid, LiaAngleLeftSolid} from "react-icons/lia"


// * items is array of objects
export default function Accordion({items}) {

    const [expandedIndex, setExpandedIndex] = useState(-1);

    

    const renderdItems = items.map((items,index)=> {
       const isExpanded = index === expandedIndex

        const icon = <span className="ml-2 text-xl">
            {isExpanded ? <LiaAngleDownSolid/> : <LiaAngleLeftSolid/> }
        </span>

        const handleClick = (nextIndex)=> {
            if(expandedIndex === index){
                setExpandedIndex(-1)
            }else{
                setExpandedIndex(nextIndex)
            }
        }
            
        // ! in on click event when we need to pass paramter to the function we as usual put the refreence not calling it directly
        return (
            <div key={items.id} className="w-1/2" >
                                                                                            
                <div className="flex items-center justify-between bg-gray-50 border p-3" onClick={()=>{handleClick(index)}} >
                    {items.label}
                    {icon}
                    </div>
                {isExpanded && <div className="border p-5">{items.content}</div>}
                
            </div>
        )
    })
    

    return <div>
        {renderdItems}
        </div>
}