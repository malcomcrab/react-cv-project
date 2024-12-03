import Button from "./Button";
import edit from "../assets/edit.svg";
import trash from "../assets/trash.svg";

function SubmissionItem({ data, handleDeleteData, handleEditData }) {
  return (
    <div className="list-item">
      <p>{data.schoolName + ': '}</p>
      <div>
      <Button className={'list-button'} text={<img  src={trash}></img>} value={data.id} handleClick={handleDeleteData} />
      <Button className={'list-button'} text={<img  src={edit}></img>} value={data.id} handleClick={handleEditData} />
      </div>
      </div>
  );
}

export default SubmissionItem;
