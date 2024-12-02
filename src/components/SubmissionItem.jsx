import Button from "./Button";
import edit from "../assets/editIcon.svg";

function SubmissionItem({ data, handleDeleteData, handleEditData }) {
  return (
    <div>
      <p>{data.schoolName}</p>
      <Button text={"Delete"} value={data.id} handleClick={handleDeleteData} />
      <Button
        value={data.id}
        handleClick={handleEditData}
        text={<img src={edit} />}
      />
    </div>
  );
}

export default SubmissionItem;
