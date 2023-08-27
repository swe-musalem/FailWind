import Link from "./Link";

import useNavigation from "../hooks/use-navigaition";
export default function Sidebar(){

    

    const {docsPrefix} = useNavigation()
    
    const links = [
        {label: 'Dropdown', path:docsPrefix+'/'},
        {label: 'Accordion',path:docsPrefix+'/accordion'},
        {label: 'Buttons', path:docsPrefix+'/buttons' },
        {label:'SearchBar',path:docsPrefix+'/searchbar'},
        {label:'Modal',path:docsPrefix+'/modal'},
        {label:'Table',path:docsPrefix+'/table'}
    ]

    
    const renderdLinks = links.map((link)=>{
        return(
           <Link key={link.label} to={link.path} className='mb-3' activeClassName="font-bold border-l border-slate-100 pl-2">
            {link.label}
           </Link>
        )
       
    })

    return <div className="sticky top-0 flex flex-col  items-start">
        
        {renderdLinks}
    </div>

}