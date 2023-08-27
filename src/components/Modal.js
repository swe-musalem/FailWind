import  ReactDOM  from "react-dom"
import { useEffect } from "react"



export default function Modal({onClose,children,actionBar}){

    useEffect(()=>{
        document.body.classList.add('overflow-hidden')

        return ()=>{
            console.log('im not there anymore')
            document.body.classList.remove('overflow-hidden')
        }
    },[])


    return ReactDOM.createPortal(
        <div>
            <div onClick={onClose} className="fixed inset-0 bg-gray-300 opacity-80 "></div>
            <div className="fixed  inset-y-80 md:inset-x-32 lg:inset-x-[35%] mx-2 lg:mx-0 rounded-md  p-4 bg-white">
                <div className="flex flex-col justify-between h-full">
                    <div>{children}</div>
                    <div className="flex justify-end">{actionBar}</div>
                </div>
            </div>
        </div>,
        document.querySelector('.modal-container')
    )


  
}