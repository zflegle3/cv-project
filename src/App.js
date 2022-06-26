import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Personal from './components/Personal';
import Skills from './components/Skills.js';
import PopUpInputForm from './components/Pop-up-input-form.js';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [expFormVars, setExpFormVars] = useState([
    {formEle: "form-input", title:"company", inType: "text", placehold: "Company Name", key: uuidv4()},
    {formEle: "form-input", title:"location", inType: "text", placehold: "City, State", key: uuidv4()},
    {formEle: "form-input", title:"role", inType: "text", placehold: "Position or Title", key: uuidv4()},
    {formEle: "form-input", title:"from", inType: "text", placehold: "From: MM/YYYY", key: uuidv4()},
    {formEle: "form-input", title:"to", inType: "text", placehold: "To: MM/YYYY or Present", key: uuidv4()},
    {formEle: "form-input", title:"misc", inType: "text", placehold: "Additional information: (achievements, awards, projects)", key: uuidv4()},
    ]);
  const [edFormVars, setEdFormVars] = useState([
    {formEle: "form-input", title:"school", inType: "text", placehold: "University or School Name", key: uuidv4()},
    {formEle: "form-input", title:"location", inType: "text", placehold: "City, State", key: uuidv4()},
    {formEle: "form-input", title:"major", inType: "text", placehold: "Degree Major", key: uuidv4()},
    {formEle: "form-input", title:"from", inType: "text", placehold: "From: MM/YYYY", key: uuidv4()},
    {formEle: "form-input", title:"to", inType: "text", placehold: "To: MM/YYYY or Present", key: uuidv4()},
    {formEle: "form-input", title:"misc", inType: "text", placehold: "Additional information: (achievements, awards, projects)", key: uuidv4()},
    ]);
  return (
    <div className="App">
      <div className="header">
        <h1>CV-Application</h1>
        <h2>Sub Title Info Here</h2>
      </div>
      <div className="main-content">

        <form className="input-form">
          <label>Personal Information</label>
          <Personal />

          <label>Education</label>
          <PopUpInputForm formVars={edFormVars}/>

          <label>Work Experience</label>
          <PopUpInputForm formVars={expFormVars}/>

          <label>Skills</label>
          <Skills />

        </form>
      </div>
    </div>
  );
}

export default App;


//NOTES
// 1) Use class components primarily 
// 2) Sections
//   a) General Info (contact, phone, name, email)
//   b) Education Experience (School, major, study dates)
//   c) Experience (company, title, tasks, dates,)
// 3) Edit and submit buttons for content 
