import DisplayForm from "./EducationDisplayTemplate";
import prof from "../assets/prof.jpg";
import SkillsDisplayTemplate from "./SkillsDisplayTemplate";
import WorkExperienceTemplate from "./WorkExperienceTemplate";

  {/* this component creates and displays the CV for display in the browser. 
    as new data is added or deleted it updates the CV live */}

function CvDisplay({
  firstName,
  surname,
  educationData,
  jobRole,
  handleDeleteData,
  skillsArray,
  experienceArray,
}) {
  return (
    <div id="cv-display-container">
      <div id="cv-head-container">
        <div id="names-container">
          <p id="first-name-display" className="name-display">
            {firstName}
          </p>
          <p id="surname-display" className="name-display">
            {surname}
          </p>
        </div>
        <div id="info-container">
          <p id="job-display" className="info-display">
            {jobRole}
          </p>
        </div>
      </div>

      <div id="cv-photo-container" className="photo-container">
        <img src={prof} width="150px" alt="Headshot of Job Applicant" />
      </div>

      <div id="left-cv-container" className="list-container">
        <h4>Skills: </h4>
        <ul>
          {/* Skills formData (array of objects) is mapped and each object is passed through 
        the DisplayForm component and rendered.*/}
          {skillsArray.map((item) => {
            return (
              <SkillsDisplayTemplate
                key={item.skillTitle}
                data={item.skillTitle}
              />
            );
          })}
        </ul>
      </div>

      <div id="about-container">
        <h3>About Me: </h3>
      </div>

      <div id="experience-container">
        <h3>Work Experience: </h3>

          {/* work experience from data (array of objects) is mapped and each object is passed through 
        the DisplayForm component and rendered.*/}
        {experienceArray.map((item) => {
          return (
            <WorkExperienceTemplate key={item.experienceName} data={item} />
          );
        })}
      </div>

      <div id="education-container">
        <h3>Education: </h3>

        {/* educationData (array of objects) is mapped and each object is passed through 
        the DisplayForm component and rendered.*/}
        {educationData.map((item) => {
          return (
            <DisplayForm
              key={item.schoolName}
              data={item}
              handleDeleteData={handleDeleteData}
            />
          );
        })}

        <hr></hr>
      </div>
    </div>
  );
}

export default CvDisplay;
