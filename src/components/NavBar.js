import Dropdown from "./Dropdown"

export default function NavBar({params}) {
    const versions = [
        {label:'beta v1.0.0',value:'1.0.0'},
        {label:'v1.0.1',value:'1.0.1'},
    ]


    return <div className="sticky top-0 w-full  text-slate-200">
        <div className="flex gap-x-6">
            <div className="font-semibold text-2xl tracking-wider">failwindcss</div>
        
        </div>
    </div>
}