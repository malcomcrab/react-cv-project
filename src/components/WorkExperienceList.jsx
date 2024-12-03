import SubmissionItem from "./SubmissionItem";

function WorkExperienceList({
  experienceArray,
  handleEditData,
  handleDeleteData,
}) {
  console.log(experienceArray);
  return (
    <div>
      <div id="experience-list-container" className="hidden-list">
        {experienceArray.map((item) => {
          return (
            <SubmissionItem
              key={item.id}
              data={item}
              title={item.experienceName}
              handleEditData={handleEditData}
              handleDeleteData={handleDeleteData}
            />
          );
        })}
      </div>
    </div>
  );
}

export default WorkExperienceList;
