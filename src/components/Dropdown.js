import { useState,useEffect,useRef } from "react"
import classNames from "classnames";

import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";



export default function Dropdown({options,value,onChange,className}) {
    const [isOpen, setIsOpen] = useState(false);
    // * we use useref to get refrence to every instance of dropdown component and we associate it with 
    // * the root element by ref prop ref={useRef()}
    const divEl = useRef()

    const classes = classNames('relative',className)
    


    useEffect(()=>{
        const handler = (event)=>{
            // * best practise to avoid null
            if(!divEl.current){
                return;
            }

            if(!divEl.current.contains(event.target)){
                setIsOpen(false)
            }
        }
        document.addEventListener('click',handler,true)


       
    },[])
    



    const handleClick = ()=>{
        setIsOpen(!isOpen)
    }
    

    const handleOptionClick = (option)=> {
        setIsOpen(false)
        onChange(option)
    }

    




    const renderdOptions = options.map((option)=> {
        
        

        return <div className='text-center hover:bg-sky-100 cursor-pointer rounded p-1' key={option.value} onClick={()=>{handleOptionClick(option)}}>
            {option.label}
            
        </div>
    })

    


    return <div ref={divEl} className={classes}>
        <Panel className="flex justify-between items-center cursor-pointe  " onClick={handleClick} >
            {value?.label || 'Select...'}
            <GoChevronDown className="text-xl"/>
            </Panel>
        {isOpen && <Panel className="absolute w-auto z-10 top-full mt-1 whitespace-nowrap" onClick={handleClick}>{renderdOptions}</Panel>}
    </div>
}