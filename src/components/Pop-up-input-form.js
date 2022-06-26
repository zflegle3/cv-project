import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../styles/Pop-up-input-form.css';
import InputForm from "./InputForm.js"
import InputDisplay from "./InputDisplay.js"

function PopUpInputForm(props) {
    const [newIn, setNewIn] = useState({                
        identifier: uuidv4(),
        company: "",
        location: "",
        role: "",
        from: "",
        to: "",
        info: "",
    });
    const [formVars, setFormVars] = useState(props.formVars);
    const [editStatus, setEditStatus] = useState(false);
    const [hideStatus, setHideStatus] = useState(true);
    const [inputsAll, setInputsAll] = useState([]);
    const [buttonType, setButtonType] = useState("+ Experience");

    //HandleChange function
    const handleChange = (e) => {
        e.preventDefault();
        let inKey = e.target.id;
        let inVal = e.target.value;
        let tempObj = newIn;
        tempObj[inKey] = inVal;
        setNewIn(tempObj);
    };

    //SubmitChange function
    const submitChange = (e) => {
        e.preventDefault();
        let tempArr = inputsAll;
        tempArr.push(newIn);
        setInputsAll(tempArr);
        setNewIn({                
            identifier: uuidv4(),
            company: "",
            location: "",
            role: "",
            from: "",
            to: "",
            info: "",
        });
        toggleInputForm(e);
    }

    //switchInput function
    const toggleInputForm = (e) => {
        e.preventDefault();
        if (editStatus) {
            setEditStatus(false);
            setButtonType("+ Experience")
        } else {
            setEditStatus(true);
            setButtonType("Cancel")
        }
    }

    //deleteItem function
    const deleteItem = (e) => {
        e.preventDefault();
        let selectedId = e.target.parentElement.id;
        let delResult = inputsAll;
        setInputsAll(delResult.filter(selected => selected.identifier !== selectedId));
    }

    if (editStatus) {
        return (
            <div className="section-main">
                <div className="current-info">
                    <InputDisplay inputsAll={inputsAll} formVars={formVars} deleteItem={deleteItem}/>
                </div>
                <div className="new-info">
                    <InputForm formVars={formVars} handleChange={handleChange} submitChange={submitChange}/>
                </div>
                <button onClick={toggleInputForm}>{buttonType}</button>
            </div>
        );
    } else {
        return (
            <div className="section-main">
                <div className="current-info">
                <InputDisplay inputsAll={inputsAll} formVars={formVars} deleteItem={deleteItem}/>
                </div>
                <button onClick={toggleInputForm}>{buttonType}</button>
            </div>
        );
    }
}

export default PopUpInputForm;