import Button from "./Button";
import edit from "../assets/edit.svg";
import trash from "../assets/trash.svg";

function SubmissionItem({ data, handleDeleteData, handleEditData, title }) {
  return (
    <div className="list-item">
      <p>{title + ": "}</p>
      <div>
        <Button
          className={"list-button"}
          text={"Delete"}
          value={data.id}
          handleClick={handleDeleteData}
        />
        <Button
          className={"list-button"}
          text={"Edit"}
          value={data.id}
          handleClick={handleEditData}
        />
      </div>
    </div>
  );
}

export default SubmissionItem;
