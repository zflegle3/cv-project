import React, { useState, useEffect } from 'react';

function InputDisplay(props) {

    //deleteItem passed through w/ props

    if (props.inputsAll.length > 0) {
        return (props.inputsAll.map((inputInfo) =>
            <div key={inputInfo.identifier} id={inputInfo.identifier} className="display-current">
                <p className={props.formVars[0].title}>{inputInfo[props.formVars[0].title]}</p>
                <p className={props.formVars[1].title}>{inputInfo[props.formVars[1].title]}</p>
                <p className={props.formVars[2].title}>{inputInfo[props.formVars[2].title]}</p>
                <p className={props.formVars[4].title}>To: {inputInfo[props.formVars[4].title]}</p>
                <p className={props.formVars[3].title}>From: {inputInfo[props.formVars[3].title]}</p>
                <p className={props.formVars[5].title}>{inputInfo[props.formVars[5].title]}</p>
                <button onClick={props.deleteItem}>X</button>
            </div>
        ));
    } else {
        return null
    }
}

export default InputDisplay;