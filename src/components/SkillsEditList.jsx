import SubmissionItem from "./SubmissionItem";

function SkillsEditList({ data }) {
  return (
    <div>
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
    </div>
  );
}

export default SkillsEditList;
