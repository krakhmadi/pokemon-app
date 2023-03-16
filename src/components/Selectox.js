import React from 'react';

const SelectBox = ({ label = "", title = "", data = [], ...props }) => {
    return (
        <div className="form-group col-md-3 d-flex" style={{ width:'100%', gap:"8px", flexDirection:'column', marginTop:"8px", marginBottom:"8px" }}>
            <label className='paragraph-form'>{label}</label>
            <select {...props} className="form-control" id="inputGroupSelect01">
                <option selected value={""} disabled>{title}</option>
                {data.map((item, index) => (
                    <option key={index} className="anu" value={item.value}>{item.label}</option>
                ))}
            </select>
        </div>
    )
}

export default SelectBox;