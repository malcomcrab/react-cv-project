import SubmissionItem from "./SubmissionItem";

{/* Creates a list element for the Skills formData passed to it*/}

function SkillsEditList({ data }) {
  return (
    <div id="skills-list-container" className="hidden-list">
      {data.map((item) => {
        return (
          <SubmissionItem
            title={item.skillTitle}
            data={item.skillTitle}
            key={item.id}
            id={item.id}
          />
        );
      })}
    </div>
  );
}

export default SkillsEditList;
