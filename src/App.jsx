import { useState } from "react";
import "./App.css";
import Header from "./components/headerFooter/Header";
import Footer from "./components/headerFooter/Footer";
import GeneralInfo from "./components/GeneralInfo";
import CvDisplay from "./components/CvDisplay";
import EducationForm from "./components/EducationForm";
import Button from "./components/elements/Button";
import EducationList from "./components/EducationEditList";
import EducationEditor from "./components/EducationEditor";
import SkillsForm from "./components/SkillsForm";
import WorkExperienceForm from "./components/WorkExperienceForm";
import WorkExperienceList from "./components/WorkExperienceList";
import SkillsEditList from "./components/SkillsEditList";
import { handleListToggle, hideAllLists } from "./modules/ListFunctions";
import { hideForms, handleToggle } from "./modules/FormFunctions";

function App() {
  const [firstName, setFirstName] = useState("John");
  const [surname, setSurname] = useState("Bon");
  const [jobRole, setJobRole] = useState("Developer");
  const [educationData, setEducationData] = useState([]);
  const [editData, setEditData] = useState(null);
  const [skillsArray, setSkillsArray] = useState([
    { id: crypto.randomUUID(), skillTitle: "Karate Black Belt" },
  ]);
  const [experienceArray, setExperienceArray] = useState([]);

  {/*When the user types in any of the general info inputs it is updated to its respective state
  the CV display for the input rerenders and updates after each keystroke.*/}

  const handleChangeName = (event) => {
    setFirstName(event.target.value);
  };
  const handleChangeSurname = (event) => {
    setSurname(event.target.value);
  };
  const handleChangeJobRole = (event) => {
    setJobRole(event.target.value);
  };

  
  {/*The value of the delete button in the list item is the ID of the formData object it represents
  using this it is filtered out of the array and the new array is overwritten in state*/} 

  const handleDeleteData = (event) => {
    console.log(event.target.value);
    setEducationData((previousEducationData) =>
      previousEducationData.filter((data) => data.id != event.target.value),
    );
  };

  {/* The value of the edit button is the ID of the form data object in state. Using the ID the object is
    copied and stored to a new state 'editData' this is passed to the educationEdior component and 
    displayed in the form inputs */}

  const handleEditData = (event) => {
   const editForm = educationData.find((data) => data.id == event.target.value);
   setEditData(editForm);
  };

  return (
    <>
      <main id={"main-content"} className={"container"}>
        <div id={"left-column"}>
          <Header />

          <div className="form-list-container">

            <div className="form-controls-container">
              <div className="controls-container">
                <h3>Personal Details</h3>
                {/*button to open general info form */}
                <div>
                  <Button
                    className={"control-list-button"}
                    text={"V"}
                    value={"general-info-form"}
                    handleClick={handleToggle}
                  />
                </div>
              </div>

              <GeneralInfo
                name={firstName}
                handleChangeName={handleChangeName}
                surname={surname}
                handleChangeSurname={handleChangeSurname}
                jobRole={jobRole}
                handleChangeJobRole={handleChangeJobRole}
              />
            </div>

            <div className="form-controls-container">
              <div className="controls-container">
                <h3>Add Education</h3>
                {/*button to open Education form*/}
                <div>
                  <Button
                    className={"control-list-button"}
                    text={"V"}
                    value={"education-list-container"}
                    handleClick={handleListToggle}
                  />

                  <Button
                    className={"control-list-button"}
                    text={"+"}
                    value={"education-form"}
                    handleClick={handleToggle}
                  />
                </div>
              </div>
              <EducationList
                className={"control-list-button"}
                educationData={educationData}
                handleEditData={handleEditData}
                handleDeleteData={handleDeleteData}
              />
            </div>

            <div className="form-controls-container">
              <div className="controls-container">
                <h3>Add Skills</h3>
                {/*button to open Education form*/}
                <div>
                  <Button
                    className={"control-list-button"}
                    text={"V"}
                    value={"skills-list-container"}
                    handleClick={handleListToggle}
                  />
                  <Button
                    className={"control-list-button"}
                    text={"+"}
                    value={"skills-form"}
                    handleClick={handleToggle}
                  />
                </div>
              </div>
              <SkillsEditList data={skillsArray} />
            </div>

            <div className="form-controls-container">
              <div className="controls-container">
                <h3>Add Work Experience</h3>
                {/*button to open Education form*/}
                <div>
                  <Button
                    className={"control-list-button"}
                    text={"V"}
                    value={"experience-list-container"}
                    handleClick={handleListToggle}
                  />
                  <Button
                    className={"control-list-button"}
                    text={"+"}
                    value={"experience-form"}
                    handleClick={handleToggle}
                  />
                </div>
              </div>
              <WorkExperienceList experienceArray={experienceArray} />
            </div>
          </div>

          

          <div className="form-list-container" >
          <EducationForm
            setEducationData={setEducationData}
            educationData={educationData}
          />

          { editData && <EducationEditor data={editData} /> }

          <SkillsForm
            setSkillsArray={setSkillsArray}
            skillsArray={skillsArray}
          />

          <WorkExperienceForm
            setExperienceArray={setExperienceArray}
            experienceArray={experienceArray}
          />
        </div>
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
