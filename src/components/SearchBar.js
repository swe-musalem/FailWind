import { useState } from "react"
import { motion } from "framer-motion";
import { GoXCircleFill } from "react-icons/go";
import {MdLaunch} from 'react-icons/md'

export default function SearchBar({children}) {

    const [isOpen, setIsOpen] = useState(false);
    const [selectOpen, setSelectOpen] = useState(true);

    const handleSelectOpen = ()=>{
        setSelectOpen(false)
    }

    const handleClick = ()=> {
        setIsOpen(true)
    }

    const handleClose = ()=>{
        setIsOpen(false)
    }

    
    const [select, setSelect] = useState('');
    const [keyWord, setKeyWord] = useState(select);

    const apiResults = ['bar','apple','coffee','car','cat','dog','fly','orange','sky','orianted']

    const [results, setResults] = useState([]);

    const handleSelect = (selection)=>{
        setSelect(selection)
        setKeyWord(selection)
    }

    const handleInput = (event)=> {
        
        setKeyWord(event.target.value)
        setSelectOpen(true)
        const filtredResults = apiResults.filter((result)=>{
            
            return result.startsWith((keyWord))
        })
        setResults([...filtredResults])
    }

    const renderdResults = results.map((result)=>{
        return <div key={result}  onClick={()=>{handleSelect(result);handleSelectOpen()}}   className="flex justify-between items-center hover:bg-slate-300 p-1 rounded-md">
            <div className="">{result}</div>
            <MdLaunch/>
        </div>
    })


    console.log(results)
       return <div className=''>
 
                {/* <button onClick={handleClick}  className="bg-slate-300 p-4 rounded-full cursor-pointer text-slate-600 font-semibold  ">Click me !</button>
                {isOpen && 
                <motion.div 
                animate={{width:'25%',height:'25%',x:-200,y:-100,rotate: 360}}
                className="text-3xl bg-white absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 rounded  ">
                    <div className="relative">
                        <div onClick={handleClose} className=" text-slate-800 cursor-pointer absolute top-1.5 right-2.5"><GoXCircleFill/></div>
                    </div>
                    {children}

                               
                   
                </motion.div>}  */}
                    
                    <div className=" w-full overflow-hidden mt-4 rounded-md ">
                        <input className="w-full p-2 caret-slate-400 bg-slate-800 rounded-md" placeholder=" Quick Search..."  value={keyWord}  onChange={handleInput} type="text" />
                        { keyWord && selectOpen &&<div className="flex flex-col text-slate-400 bg-slate-800 gap-2 p-2">{renderdResults}</div>}
                    </div>
            </div>
    
   
}