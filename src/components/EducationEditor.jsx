import Button from "./Button";
import Input from "./Input";

function EducationEditor({ data }) {
  if (data.length > 0) {
    return (
      <div>
        <label htmlFor={"schoolName"}>Place of Education: </label>
        <Input
          id={"education-name-input"}
          name={"schoolName"}
          text={data[0].schoolName}
          required={"required"}
        />
        <Button text={"save"} />
      </div>
    );
  }
}

export default EducationEditor;
