
import useNavigation from "../hooks/use-navigaition";

export default function Route({path,children}) {
    // * path is like are you equal to currentPath which was Changed by navigation context in the bar, while Path is the prop passed by App.js
    const {currentPath} = useNavigation()
    if (path === currentPath){
        return children;
    }
    return null;
}