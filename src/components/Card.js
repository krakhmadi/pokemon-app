import React from "react";

const Card = (components) => {
    return(
        <div style={{
            boxShadow: '1px 2px 12px rgba(0, 0, 0, 0.2)',
            padding: '1em',
            borderRadius: '12px'
        }}>
            {components.children}
        </div>

    )
}

export default Card;