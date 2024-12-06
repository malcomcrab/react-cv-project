import SubmissionItem from "./SubmissionItem";

{/* Creates a list element for the Work experience formData passed to it*/}

function WorkExperienceList({
  experienceArray,
  handleEditData,
  handleDeleteData,
}) {
  
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
