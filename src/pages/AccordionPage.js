import { ImSigma } from "react-icons/im";
import Button  from '../components/Button'
import Accordion from "../components/Accordion";
import { useId } from "react";

export default function AccordionPage() {

    const items = [
        {
            id:useId(),
            label:'Candels cannot light under sunshine',
            content:'Velit pretium aenean est fames ac facilisi mauris quis gravida mollis lectus'
        },
        {
            id:useId(),
            label:'Flashlights cannot light under sunshine',
            content:'Velit pretium aenean est fames ac facilisi mauris quis gravida mollis lectus'
        },
        {
            id:useId(),
            label:'moon cannot light under sunshine',
            content:'Velit pretium aenean est fames ac facilisi mauris quis gravida mollis lectus'
        },
    ]
    
    return <Accordion items={items} />
}