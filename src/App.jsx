import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GeneralDisplay from "./components/GeneralInfoDisplay";
import GeneralInfo from "./components/GeneralInfo";
import CvDisplay from "./components/CvDisplay";
import EducationForm from "./components/EducationForm";
import Button from "./components/Button";
import EducationList from "./components/EducationEditList";
import EducationEditor from "./components/EducationEditor";
import SkillsForm from "./components/SkillsForm";
import WorkExperienceForm from "./components/WorkExperienceForm";

function App() {
  const [firstName, setFirstName] = useState("John");
  const [surname, setSurname] = useState("Bon");
  const [jobRole, setJobRole] = useState("Developer");
  const [educationData, setEducationData] = useState([]);
  const [editData, setEditData] = useState("");
  const [skillsArray, setSkillsArray] = useState([{ skillTitle: "toad" }]);
  const [experienceArray, setExperienceArray] = useState([])

  const handleToggle = (event) => {
    let toggle = document.getElementById(event.target.value);
    if (toggle.className === "hidden-form") {
      toggle.className = "unhidden-form";
    } else {
      toggle.className = "hidden-form";
    }
  };

  //When the name inputs are changed state is updates which rerenders the name display
  const handleChangeName = (event) => {
    setFirstName(event.target.value);
  };
  const handleChangeSurname = (event) => {
    setSurname(event.target.value);
  };
  const handleChangeJobRole = (event) => {
    setJobRole(event.target.value);
  };
  const handleDeleteData = (event) => {
    setEducationData((previousEducationData) =>
      previousEducationData.filter((data) => data.id != event.target.value),
    );
  };
  const handleEditData = (event) => {
    setEditData(() =>
      educationData.filter((data) => data.id == event.target.value),
    );
  };

  const skillFormSubmit = (event) => {
    event.preventDefault();
    const skillData = new FormData(event.target);
    let skillFormObject = Object.fromEntries(skillData.entries());
    setSkillsArray([...skillsArray, skillFormObject]);
    console.log(skillsArray);
  };

  const experienceFormSubmit = (event) => {
    event.preventDefault()
    const experienceData = new FormData(event.target);
    let experienceFormObject = Object.fromEntries(experienceData.entries())
    setExperienceArray([...experienceArray, experienceFormObject])
    console.log(experienceArray)
  }

  //Turns form inputs into an object and saves to state
  const formSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    event.target.reset();
    let formObject = Object.fromEntries(data.entries());
    formObject.id = crypto.randomUUID();
    setEducationData([...educationData, formObject]);
    //console.log(formObject)
    //console.log(educationData[0])
  };

  return (
    <>
      <main id={"main-content"} className={"container"}>
        <div id={"left-column"}>
          <Header />

          <div className="form-list-container">

            <div className="form-controls-title">
              <h2>Add Your Info: </h2>
            </div>

            <div className="form-controls-container">
            <h3>Personal Details</h3>
            {/*button to open general info form */}
            <Button
              text={"+"}
              value={"general-info-form"}
              handleClick={handleToggle}
            />
            </div>  
            


            <div className="form-controls-container">
              <h3>Add Education</h3>
              {/*button to open Education form*/}
              <Button
                text={"+"}
                value={"education-form"}
                handleClick={handleToggle}
              />
            </div>  
            
            <div className="form-controls-container">
            <h3>Add Skills</h3>
            {/*button to open Education form*/}
            <Button
              text={"+"}
              value={"skills-form"}
              handleClick={handleToggle}
            />
            </div> 
           
            

            <div className="form-controls-container">
            <h3>Add Work Experience</h3>
            {/*button to open Education form*/}
            <Button
              text={"+"}
              value={"experience-form"}
              handleClick={handleToggle}
            />
            </div> 
           
          </div>


          <EducationList
              educationData={educationData}
              handleEditData={handleEditData}
              handleDeleteData={handleDeleteData}
            />


          <GeneralInfo
            name={firstName}
            handleChangeName={handleChangeName}
            surname={surname}
            handleChangeSurname={handleChangeSurname}
            jobRole={jobRole}
            handleChangeJobRole={handleChangeJobRole}
          />
          <div className="form-title-container"></div>

          <EducationForm formSubmit={formSubmit} />
          <EducationEditor data={editData} />

          <SkillsForm skillFormSubmit={skillFormSubmit} />

          <WorkExperienceForm experienceFormSubmit={experienceFormSubmit}/>
        </div>

        <div id={"right-column"}>
          <CvDisplay
            firstName={firstName}
            surname={surname}
            jobRole={jobRole}
            educationData={educationData}
            skillsArray={skillsArray}
            experienceArray={experienceArray}
          />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
