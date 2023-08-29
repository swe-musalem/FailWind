
import AccordionPage from './pages/AccordionPage'
import DropdownPage from './pages/DropdownPage'
import Route from "./components/Route"
import Sidebar from './components/Sidebar'
import ButtonPage from './pages/ButtonPage'
import NavBar from './components/NavBar'
import SearchBarPage from './pages/SearchBarPage'
import ModalPage from './pages/ModalPage'
import SearchBar from './components/SearchBar'
import TablePage from './pages/TablePage'
import HomePage from './pages/libPages/HomePage'

import useNavigation from './hooks/use-navigaition'

import background from './images/Hypercolor.jpg'

export default function App() {

    const {docsPrefix,currentPath} = useNavigation();

    

        return <div style={{
            backgroundImage:`url(${background})`,
            backgroundColor:'#c4c4c4',
            backgroundSize:'contain',
            backgroundRepeat:'no-repeat',
            height:'100vh'
        }}>
           
            <Route path='/home'>
                <HomePage/>
            </Route>

            

             <div className={` grid grid-cols-6 gap-4 pt-4 w-11/12 mx-auto   ${currentPath === '/home' && 'hidden'}`} >
                <div className='col-span-6'><NavBar/></div>
                <div >
                    <SearchBar />
                    <div className=' mt-10 border-l border-slate-800 ' >
                        <Sidebar/>
                        </div>
                    
                </div>

            <div className='col-span-5 h-full'>
                <Route path={`${docsPrefix}/`}>
                    <DropdownPage/>
                </Route>
                <Route path={`${docsPrefix}/accordion`}>
                    <AccordionPage/>
                </Route>
                <Route path={`${docsPrefix}/buttons`}>
                    <ButtonPage/>
                </Route>
                <Route path={`${docsPrefix}/searchbar`}>
                    <SearchBarPage/>
                </Route>
                <Route path={`${docsPrefix}/modal`}>
                    <ModalPage/>
                </Route>
                <Route  path={`${docsPrefix}/table`}>
                    <TablePage/>
                </Route>
            </div>
        </div>

        </div>
        
       
}