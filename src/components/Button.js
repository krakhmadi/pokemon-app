import React from 'react';


const Button = ({ children, ...props }) => {
    return (
        <button style={{ width:'100%', marginTop:"8px", marginBottom:"8px", backgroundColor:"#5CB85F", borderColor:"#5CB85F", borderRadius:"4px" }} {...props}>{children}</button>
    )
}

export default Button
