import Button from "./Button";
import edit from "../assets/editIcon.svg";

function SubmissionItem({ data, handleDeleteData, handleEditData }) {
  return (
    <div>
      <p>{data.schoolName}</p>
      <Button text={"Delete"} value={data.id} handleClick={handleDeleteData} />
      <Button text={"Edit"} value={data.id} handleClick={handleEditData} />
    </div>
  );
}

export default SubmissionItem;
