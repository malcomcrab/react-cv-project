import SubmissionItem from "./SubmissionItem";

function EducationList({ educationData, handleEditData, handleDeleteData }) {
  return (
    <div>
      <div id="education-list-container" className="hidden-list">
        {educationData.map((item) => {
          return (
            <SubmissionItem
              key={item.id}
              data={item}
              title={item.schoolName}
              handleEditData={handleEditData}
              handleDeleteData={handleDeleteData}
            />
          );
        })}
      </div>
    </div>
  );
}

export default EducationList;
