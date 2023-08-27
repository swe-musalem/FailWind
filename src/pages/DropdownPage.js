



import { useState } from 'react'
import Dropdowm from '../components/Dropdown'





export default function DropdownPage() {

    // * selection could be used for other comonents or api's so we place it in app
    const [selection, setSelection] = useState(null);

    const handleSelect = (option)=>{
        setSelection(option)
    }

    const options = [
        { label:'Red', value:'red'},
        { label:'Green', value:'green'},
        { label:'Blue', value:'blue'},
    ]

    const options1 = [
        { label:'X', value:'X'},
        { label:'Y', value:'Y'},
        { label:'T', value:'T'},
    ]


   return <div className='flex '>
     
     
            <Dropdowm options={options} value={selection} onChange={handleSelect}/>
            <Dropdowm options={options1} value={selection} onChange={handleSelect}/>
        
        </div>
    
      
}