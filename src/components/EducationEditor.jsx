import Button from "./elements/Button";
import Input from "./elements/Input";

function EducationEditor({ data }) {
  console.log(data);
 
  if (data.length > 0) {
    
    return (
      <form key={data}>
        <Input
          id={"education-name-input"}
          name={"schoolName"}
          text={data[0].schoolName}
          required={"required"}
        />

        <Input
          id={"education-type-input"}
          name={"educationType"}
          text={data[0].educationType}
          required={"required"}
        />

        <Input
          id={"education-start-input"}
          name={"educationStart"}
          text={data[0].educationStart}

          type={'date'}
          required={"required"}
        />

        <Input
          id={"education-end-input"}
          name={"educationEnd"}
          text={data[0].educationEnd}
          type={'date'}
          required={"required"}
        />

        <Input
          id={"education-grade-input"}
          name={"grade"}
          text={data[0].grade}
          required={"required"}
        />

        <Input
          id={"education-notes-input"}
          name={"educationNotes"}
          text={data[0].educationNotes}
        />
        <Button text={"save"} />
      </form>
    );
  }
}

export default EducationEditor;
