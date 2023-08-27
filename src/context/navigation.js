
import { createContext, useState, useEffect } from "react";


const NavigationContext = createContext();

function NavigationProvider({children}){

    const docsPrefix = '/docs'

    // * catch the current path from anywhere user requests a page
    const [currentPath, setCurrentPath] = useState(window.location.pathname);


    // ! to avoid stacking event use useEffect hook and cleanup function
    useEffect(()=>{
        const handler = ()=>{
            console.log('invoke popstate')
            setCurrentPath(window.location.pathname)
        }

        window.addEventListener('popstate',handler)

        return ()=>{
            window.removeEventListener('popstate',handler)
        }
    },[])


    const navigate = (to)=>{
        window.history.pushState({},'',to);
        setCurrentPath(to);
    }



    
    // * remember value here is shared Across our app
    return <NavigationContext.Provider value={{currentPath, navigate,docsPrefix}}>
        {children}
        
    </NavigationContext.Provider>
}



export  {NavigationProvider};

export default NavigationContext;