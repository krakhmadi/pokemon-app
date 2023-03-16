import React from 'react';


const Input = ({ label, ...props }) => {
    return (
        <div className="form-group col-md-3 d-flex" style={{ width:'100%', gap:"8px", flexDirection:'column', marginTop:"8px", marginBottom:"8px" }}>
            <label className='paragraph-form'>{label}</label>
            <input {...props} className="form-control"></input>
        </div>
    )
}
export default Input;