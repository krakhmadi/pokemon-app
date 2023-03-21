import React from 'react';
import { Card } from 'reactstrap';


const Type = ({ children, ...props }) => {
    return (
        <Card style={{ width:'100%', marginTop:"8px", marginBottom:"8px", borderStyle:"none", borderRadius:"4px" }} {...props}>{children}</Card>
    )
}

export default Type
