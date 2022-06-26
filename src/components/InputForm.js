import React, { useState, useEffect } from 'react';

function InputForm(props) {
    const [formVars, setFormVars] = useState(props.formVars);

    // HandleChange function passsed through props
    // SubmitChange function passsed through props

    const formInputs = formVars.map((inputSelected) =>  
        <input key={inputSelected.key} onChange={props.handleChange} id={inputSelected.title} className={inputSelected.formEle} type={inputSelected.inType} placeholder={inputSelected.placehold}></input>
    );

    return (
        <div className="form-inputs-div">
            {formInputs}
            <button onClick={props.submitChange}>Submit</button>
        </div>
    );


}

export default InputForm;