import DisplayForm from "./EducationDisplayTemplate";
import prof from "../assets/prof.jpg";
import SkillsDisplayTemplate from "./SkillsDisplayTemplate";
import WorkExperienceTemplate from "./WorkExperienceTemplate";

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

      <div id="skills-container" className="list-container">
        <h3>Skills: </h3>
        {skillsArray.map((item) => {
          return (
            <SkillsDisplayTemplate
              key={item.skillTitle}
              data={item.skillTitle}
            />
          );
        })}
      </div>
      <div id="experience-container">
        <h3>Work Experience: </h3>

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
