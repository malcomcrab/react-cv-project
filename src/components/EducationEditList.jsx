import SubmissionItem from "./SubmissionItem";

function EducationList({ educationData, handleEditData, handleDeleteData }) {
  return (
    <div>
      <div id="education-list-container">
        {educationData.map((item) => {
          return (
            <SubmissionItem
              key={item.id}
              data={item}
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
