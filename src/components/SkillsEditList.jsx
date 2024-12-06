import SubmissionItem from "./SubmissionItem";

{
  /* Creates a list element for the Skills formData passed to it*/
}

function SkillsEditList({ skillsArray, handleDeleteData, handleEditSkill }) {
  return (
    <div id="skills-list-container" className="hidden-list">
      {skillsArray.map((item) => {
        return (
          <SubmissionItem
            title={item.skillTitle}
            data={item}
            key={item.id}
            handleDeleteData={handleDeleteData}
            handleEditData={handleEditSkill}
          />
        );
      })}
    </div>
  );
}

export default SkillsEditList;
