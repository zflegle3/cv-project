// import { eventWrapper } from '@testing-library/user-event/dist/utils';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../styles/Experience.css';

class Experience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newExp: {
                identifier: uuidv4(),
                company: "",
                location: "",
                role: "",
                from: "",
                to: "",
                info: "",
            },
            editStatus: false,
            hideStatus: true,
            exps: [],
            buttonType: "+ Experience",
        };

        //bind event handling apps
        this.handleChange = this.handleChange.bind(this);
        this.submitChange = this.submitChange.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    handleChange = (e) => {
        //handles changes to input fields and sets current newEd state values as input values
        let inKey = e.target.id.split("-")[1];
        let inVal = e.target.value;
        let tempObj = this.state.newExp;
        tempObj[inKey] = inVal;
        this.setState(tempObj);
        this.setState({newEd: tempObj});
    };

    submitChange = (e) => {
        //Adds input data to array of all data 
        e.preventDefault();
        let tempArr = this.state.exps;
        tempArr.push(this.state.newExp);
        this.setState({exps: tempArr});
        //clear newEds 
        this.setState({newExp: {
            identifier: uuidv4(),
            company: "",
            location: "",
            role: "",
            from: "",
            to: "",
            info: "",
        }});
        this.inputSwitch(e);
    }

    inputSwitch = (e) => {
    //toggles new info form visability and button discription
        e.preventDefault()
        this.setState((state) => {
            if (state.editStatus) {
                return {editStatus: false,
                        buttonType: "+ Experience"};
            } else {
                return {editStatus: true,
                    buttonType: "Cancel"};
            }
        });
    }

    deleteItem = (e) => {
        e.preventDefault();

        let selectedId = e.target.parentElement.id;
        let delResult = this.state.exps;

        let selectIndex = delResult.findIndex(expObj => expObj.identifier === selectedId);
        delResult.splice(selectIndex,1);
        this.setState({eds: delResult});
    }

    render() {
        let divOut;
        let expInForm;

        //New Education Input
        if (this.state.editStatus) {
        //if currently editing, populate new education div
            expInForm = 
                <div className="experience-inputs">
                    <input onChange={this.handleChange} id="exp-company" className="exp-input company" type="text" placeholder={"Company Name"}></input>
                    <input onChange={this.handleChange} id="exp-location" className="exp-input location" type="text" placeholder={"City, State"}></input>
                    <input onChange={this.handleChange} id="exp-role" className="exp-input role" type="text" placeholder={"Position or Title"}></input>
                    <input onChange={this.handleChange} id="exp-from" className="exp-input from" type="text" placeholder={"From:"}></input>
                    <input onChange={this.handleChange} id="exp-to" className="exp-input to" type="text" placeholder={"To:"}></input>
                    <textarea onChange={this.handleChange} id="exp-info" className="exp-input info" type="text" placeholder={"Additional information: (achievements, awards, projects)"}></textarea>
                    <button onClick={this.submitChange}>Submit</button>
                </div>;
        };

        //Current Education Info Display
        if (this.state.exps.length>0) {
            divOut= this.state.exps.map((experienceInfo) => 
                <div  key={experienceInfo.identifier} id={experienceInfo.identifier} className="experience-current">
                    <p className="company">{experienceInfo.company}</p>
                    <p className="location">{experienceInfo.location}</p>
                    <p className="role">{experienceInfo.role}</p>
                    <p className="from">From: {experienceInfo.from}</p>
                    <p className="to">To: {experienceInfo.to}</p>
                    <p className="info">{experienceInfo.info}</p>
                    <button onClick={this.deleteItem}>X</button>
                </div>
            );
        };

        return(
            <div className="experience">
                <div className="current-exp">
                {divOut}
                </div>
                <div className="new-exp">
                {expInForm}
                <button onClick={this.inputSwitch}>{this.state.buttonType}</button>
                </div>
            </div>
        );
    }
}

export default Experience;