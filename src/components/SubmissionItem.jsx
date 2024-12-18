import Button from "./elements/Button";

{
  /* each formData object is passed through this templated and displayed in the correct drop down 
  list*/
}

function SubmissionItem({ data, handleDeleteData, handleEditData, title }) {
  return (
    <div key={data.id} className="list-item">
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
