import React from "react";

const Segment = ({children, ...props}) => {
    return(
        <div style={{width:'100%'}} {...props}>
            {children}
        </div>
    )
}

export default Segment;