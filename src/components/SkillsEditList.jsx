import SubmissionItem from "./SubmissionItem";

{/* Creates a list element for the Skills formData passed to it*/}

function SkillsEditList({ skillData, handleDeleteData }) {
 console.log(skillData[0])
  
  return (
    <div  id="skills-list-container" className="hidden-list">
      {skillData.map((item) => {
        return (
          <SubmissionItem
            title={item.skillTitle}
            data={item}
            key={item.id}
            handleDeleteData={handleDeleteData}
          />
        );
      })}
    </div>
  );
}

export default SkillsEditList;
