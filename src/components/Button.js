import React from 'react'

const Button = ({children, ...props}) => {
    return (
        //children c'est ce qui se trouver entre le braquette Button
        <button className='button' {...props}>
            {children}
        </button>
    )
}

export default Button