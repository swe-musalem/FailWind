// import PropTypes from 'prop-types'

import className from "classnames";

// * since the the html element = component name then we refeer to the comp as wrapper, html underlying element
export default function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
}) {

    const classes = className(rest.className,'flex items-center px-3 py-1.5 border',{
        'border-blue-500 bg-blue-500 text-white':primary,
        'border-gray-900 bg-gray-900 text-white':secondary,
        'border-green-500 bg-green-500 text-white':success,
        'border-yellow-500 bg-yellow-500 text-white':warning,
        'border-red-500 bg-red-500 text-white':danger,
        'rounded-full':rounded,
        'bg-white':outline,
        'text-blue-500': outline && primary,
        'text-gray-900': outline && secondary,
        'text-green-500': outline && success,
        'text-yellow-500': outline && warning,
        'text-red-600': outline && danger,
    });

    
    return (
    <button {...rest} className={classes}>
        {children} 
        </button>
    );
}








// ! every button Wrapper will have this propType and function will be invoked when we create one
Button.propTypes = {
    // * first parameter is the current objects the wrapper has
    // ! in case if value of any boolean prop that is not true it will be undefined by default
    checkVariationValue:({primary,secondary,success,warning,danger})=>{
        // * in js !!undefined is false
        const count = Number(!!primary) + Number(!!secondary) + Number(!!success) + Number(!!warning) + Number(!!danger)

        if (count > 1 )
            return new Error('Only one of primary,secondary,success,warning,danger')
    }
};