import Button from "./Button";
import Input from "./Input";

function EducationEditor({ data }) {
  console.log(data)
  if (data.length > 0) {
    console.log(data)
    return (
      <div>
        
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
        required={"required"}
        />

        <Input 
          id={"education-end-input"}
          name={"educationEnd"}
          text={data[0].educationEnd}
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
      </div>
    );
  }
}

export default EducationEditor;
