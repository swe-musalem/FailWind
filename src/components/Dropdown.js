import { useState } from "react"





export default function Dropdown({options}) {

    const [isOpen, setIsOpen] = useState(false);


    const handleClick = ()=>{
        setIsOpen(!isOpen)
    }
    
    const renderdOptions = options.map((option)=> {
        
        

        return <div key={option.value}>
            {option.label}
            
        </div>
    })


    return <div>
        <div onClick={handleClick}>Select...</div>
        {isOpen && <div>{renderdOptions}</div>}
    </div>
}