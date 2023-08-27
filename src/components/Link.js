import classNames from 'classnames'

import useNavigation from '../hooks/use-navigaition';


export default function Link ({to,children, className,activeClassName}){

    const {navigate,currentPath} = useNavigation()

    const classes = classNames('text-slate-400 hover:text-slate-300 hover:border-l border-slate-200 pl-2',
    className,
    currentPath === to && activeClassName
    )

    const handleClick = (event)=>{
        event.preventDefault();
        navigate(to)
    }

    return <a className={classes} href={to} onClick={handleClick} >{children}</a>
}