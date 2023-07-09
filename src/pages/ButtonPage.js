import { ImSigma } from "react-icons/im";
import Button from '../components/Button'

export default function ButtonPage() {

    const handleClick = ()=>{
        console.log("tucked !!")
    }


    return <div>
        <div>
            <Button secondary rounded>
                <ImSigma />
                Click me !!
            </Button>
            
        </div>
        <div>
           
            <Button primary onClick={handleClick} > Buy Now !</Button>
        </div>
        <div>
            <Button danger outline> See Deal! </Button>
        </div>
        <div>
            <Button warning> Hide Ads !</Button>
        </div>
        <div>
            <Button success>Something !</Button>
        </div>
    </div>;
}