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
import SkillEditor from "./components/SkillEditor";
import WorkExperienceEditor from "./components/WorkExperienceEditor";




function App() {
  const [firstName, setFirstName] = useState("John");
  const [surname, setSurname] = useState("Bon");
  const [jobRole, setJobRole] = useState("Developer");
  const [educationData, setEducationData] = useState([{
    id: crypto.randomUUID(),
    schoolName: 'Harvard',
    educationType: 'GCSE',
    educationStart: '2024-08-08',
    educationEnd: '2024-08-08',
    grade: 'Shutup',
    educationNotes: 'none',
},
{
  id: crypto.randomUUID(),
  schoolName: 'baaaaarvard',
  educationType: 'bbbbbbbGCSE',
  educationStart: '2024-03-03',
  educationEnd: '2024-03-03',
  grade: 'aaaaaaaaaaShutup',
  educationNotes: 'aaaaaaaaaaaaaaanone',
}
]);
  const [educationEditData, setEducationEditData] = useState(null);
  const [experienceEditData, setExperienceEditData] = useState(null);
  const [skillEditData, setSkillEditData] = useState(null);
  const [skillsArray, setSkillsArray] = useState([{skillTitle:'toe', id: crypto.randomUUID()}]);
  const [experienceArray, setExperienceArray] = useState([{
    id: crypto.randomUUID(),
    experienceName: 'Job',
    experienceRole: 'King',
    experienceStart: '2024-08-08',
    experienceEnd: '2024-08-08',
    responsibilities: 'shhh',
    experienceNotes: 'hello',
},
{
  id: crypto.randomUUID(),
  experienceName: 'Chicken',
  experienceRole: 'Bird',
  experienceStart: '2024-03-03',
  experienceEnd: '2024-03-03',
  responsibilities: 'aaaaaaaaaaShutup',
  experienceNotes: 'aaaaaaaaaaaaaaanone',
}]);

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

  const handleEducationData = (event) => {
    setEducationData(previousEducationData => {
     return previousEducationData.filter(data => data.id !== event.target.value)
    })
  }

  
  const handleSkillDelete = (event) => {
    setSkillsArray(previousSkillsArray => {
      return previousSkillsArray.filter(data => data.id !== event.target.value)
    })
    
  }
 
  const handleExperienceDelete = (event) => {
      setExperienceArray(previousExperienceArray => {
      return previousExperienceArray.filter(item => item.id !== event.target.value)
   })
  }

  {/* The value of the edit button is the ID of the form data object in state. Using the ID the object is
    copied and stored to a new state 'editData' this is passed to the educationEdior component and 
    displayed in the form inputs */}

  const handleEditData = (event) => {
   const editForm = educationData.find((data) => data.id === event.target.value);
   setEducationEditData(editForm);
   
  };

  const handleEditSkill = (event) => {
    console.log(event.target.value)
    const skillObject = skillsArray.find((skillsEntry) => skillsEntry.id === event.target.value);
    setSkillEditData(skillObject);
   };
  
   const handleEditExperience = (event) => {
    console.log(event.target.value)
    const experienceObject = experienceArray.find((experienceEntry) => experienceEntry.id === event.target.value);
    setExperienceEditData(experienceObject);
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
                handleDeleteData={handleEducationData}
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
              { skillsArray && <SkillsEditList 
              className={"control-list-button"} key={'skillsList'} skillsArray={skillsArray} 
              handleEditSkill={handleEditSkill} handleDeleteData={handleSkillDelete}/>}

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
            {experienceArray && <WorkExperienceList experienceArray={experienceArray} handleEditData={handleEditExperience} handleDeleteData={handleExperienceDelete}/>
            }  </div>
          </div>

          

          <div className="form-list-container" >
          <EducationForm
            setEducationData={setEducationData}
            educationData={educationData}
          />

          { educationEditData && <EducationEditor data={educationEditData} educationData={educationData} setEducationData={setEducationData}  /> }

          
          <SkillsForm
            setSkillsArray={setSkillsArray}
            skillsArray={skillsArray}
          />

          {skillEditData && <SkillEditor skillEditData={skillEditData} setSkillsArray={setSkillsArray} skillsArray={skillsArray}/>}

          <WorkExperienceForm
            setExperienceArray={setExperienceArray}
            experienceArray={experienceArray}
          />

          { experienceEditData && <WorkExperienceEditor experienceEditData={experienceEditData} /> }

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
