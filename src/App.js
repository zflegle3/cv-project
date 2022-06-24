// import logo from './logo.svg';
import './styles/App.css';
import Personal from './components/Personal';
import Education from './components/Education';
import Experience from './components/Work.js';
import Skills from './components/Skills.js';

function App() {
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
          <Education />

          <label>Work Experience</label>
          <Experience />

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
