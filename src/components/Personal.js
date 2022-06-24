import React from 'react';
import '../styles/Personal.css';

class Personal extends React.Component {
    constructor() {
    super();
        //state
        this.state = {
            editStatus: true,
        };
        //bind event handling apps
        //on change, on submit, on delete button 

        this.handleChange = this.handleChange.bind(this);
        this.submitChange = this.submitChange.bind(this);
        this.delTask = this.delTask.bind(this);
    };

    handleChange = (e) => {
        console.log(e.target.value);
        // this.setState({})
    };

    submitChange = (e) => {
        console.log(e.target.value);
        console.log(this.state);
        // this.setState({});
    }

    delTask = (idDel) => {
      //removes task from state
      this.setState({
        tasks: this.state.tasks.filter(singleTask => singleTask.id !== idDel)
      })

    }

    render() {
        return (
            <div className="personal-main">
                <input onChange={this.handleChange} className="personal-input first-name" type="text" placeholder={"First Name"}></input>
                <input onChange={this.handleChange} className="personal-input last-name" type="text" placeholder={"Last Name"}></input>
                <input onChange={this.handleChange} className="personal-input email" type="email" placeholder={"email@email.com"}></input>
                <input onChange={this.handleChange} className="personal-input phone" type="tel" placeholder={"000-000-0000"}></input>
            </div>
        );
    }
}

export default Personal;

