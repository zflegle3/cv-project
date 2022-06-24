// import { eventWrapper } from '@testing-library/user-event/dist/utils';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../styles/Education.css';

class Education extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newEd: {
                identifier: uuidv4(),
                school: "",
                location: "",
                major: "",
                from: "",
                to: "",
                info: "",
            },
            editStatus: false,
            hideStatus: true,
            eds: [],
            buttonType: "+ Education",
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
        let tempObj = this.state.newEd;
        tempObj[inKey] = inVal;
        this.setState(tempObj);
        this.setState({newEd: tempObj});
    };

    submitChange = (e) => {
        //Adds input data to array of all data 
        e.preventDefault();
        let tempArr = this.state.eds;
        tempArr.push(this.state.newEd);
        this.setState({eds: tempArr});
        //clear newEds 
        this.setState({newEd: {
            school: "",
            location: "",
            major: "",
            from: "",
            to: "",
            info: "",
            identifier: uuidv4(),
        }});
        this.newEd(e);
    }

    newEd = (e) => {
    //toggles new info form visability and button discription
        e.preventDefault()
        this.setState((state) => {
            if (state.editStatus) {
                return {editStatus: false,
                        buttonType: "+ Education"};
            } else {
                return {editStatus: true,
                    buttonType: "Cancel"};
            }
        });
    }

    deleteItem = (e) => {
        e.preventDefault();

        let selectedId = e.target.parentElement.id;
        let delResult = this.state.eds;
        let selectIndex = delResult.findIndex(edObj => edObj.identifier === selectedId);
        delResult.splice(selectIndex,1);
        this.setState({eds: delResult});
    }

    render() {
        let divOut;
        let edInForm;

        //New Education Input
        if (this.state.editStatus) {
        //if currently editing, populate new education div
            edInForm = 
                <div className="education-inputs">
                    <input onChange={this.handleChange} id="ed-school" className="ed-input school" type="text" placeholder={"University or School Name"}></input>
                    <input onChange={this.handleChange} id="ed-location" className="ed-input location" type="text" placeholder={"City"}></input>
                    <input onChange={this.handleChange} id="ed-major" className="ed-input major" type="text" placeholder={"Degree Major"}></input>
                    <input onChange={this.handleChange} id="ed-from" className="ed-input from" type="text" placeholder={"From:"}></input>
                    <input onChange={this.handleChange} id="ed-to" className="ed-input to" type="text" placeholder={"To:"}></input>
                    <textarea onChange={this.handleChange} id="ed-info" className="ed-input info" type="text" placeholder={"Additional information: (achievements,awards,projects)"}></textarea>
                    <button onClick={this.submitChange}>Submit</button>
                </div>;
        };

        //Current Education Info Display
        if (this.state.eds.length>0) {
            divOut= this.state.eds.map((educationInfo) => 
                <div  key={educationInfo.identifier} id={educationInfo.identifier} className="education-current">
                    <p className="school">{educationInfo.school}</p>
                    <p className="location">{educationInfo.location}</p>
                    <p className="major">{educationInfo.major}</p>
                    <p className="from">From: {educationInfo.from}</p>
                    <p className="to">To: {educationInfo.to}</p>
                    <p className="info">{educationInfo.info}</p>
                    <button onClick={this.deleteItem}>X</button>
                </div>
            );
        };

        return(
            <div className="education">
                <div className="current-ed">
                {divOut}
                </div>
                <div className="new-ed">
                {edInForm}
                <button onClick={this.newEd}>{this.state.buttonType}</button>
                </div>
            </div>
        );
    }
}

export default Education;