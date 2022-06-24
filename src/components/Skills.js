import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../styles/Skills.css';

class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newSkill: {
                identifier: uuidv4(),
                title: "",
            },
            editStatus: false,
            hideStatus: true,
            skillsAll: [],
            buttonType: "+ Skill",
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
        let tempObj = this.state.newSkill;
        tempObj[inKey] = inVal;
        this.setState(tempObj);
        this.setState({newSkill: tempObj});
    };

    submitChange = (e) => {
        //Adds input data to array of all data 
        e.preventDefault();
        let tempArr = this.state.skillsAll;
        tempArr.push(this.state.newSkill);
        this.setState({skillsAll: tempArr});
        //clear newEds 
        this.setState({newSkill: {
            identifier: uuidv4(),
            skill: "",
        }});
        this.inputSwich(e);
    }

    inputSwich = (e) => {
    //toggles new info form visability and button discription
        e.preventDefault()
        this.setState((state) => {
            if (state.editStatus) {
                return {editStatus: false,
                        buttonType: "+ Skill"};
            } else {
                return {editStatus: true,
                    buttonType: "Cancel"};
            }
        });
    }

    deleteItem = (e) => {
        e.preventDefault();
        let selectedId = e.target.parentElement.id;
        let delResult = this.state.skillsAll;
        let selectIndex = delResult.findIndex(skillObj => skillObj.identifier === selectedId);
        delResult.splice(selectIndex,1);
        this.setState({skillsAll: delResult});
    }

    render() {
        let divOut;
        let edInForm;

        //New Education Input
        if (this.state.editStatus) {
        //if currently editing, populate new education div
            edInForm = 
                <div className="skill-inputs">
                    <input onChange={this.handleChange} id="skill-title" className="skill-input title" type="text" placeholder={"Add Skill"}></input>
                    <button onClick={this.submitChange}>Submit</button>
                </div>;
        };

        // PICK UP EDITING HERE

        //Current Education Info Display
        if (this.state.skillsAll.length>0) {
            divOut= this.state.skillsAll.map((educationInfo) => 
                <div  key={educationInfo.identifier} id={educationInfo.identifier} className="skills-current">
                    <p className="skill">{educationInfo.title}</p>
                    <button onClick={this.deleteItem}>X</button>
                </div>
            );
        };

        return(
            <div className="skills">
                <div className="current-skills">
                {divOut}
                </div>
                <div className="new-skill">
                {edInForm}
                <button onClick={this.inputSwich}>{this.state.buttonType}</button>
                </div>
            </div>
        );
    }
}

export default Skills;