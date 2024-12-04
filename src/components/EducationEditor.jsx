import Button from "./elements/Button";
import Input from "./elements/Input";
import { useEffect } from "react";

{/* When an edit button is clicked on one of the data lists its stored to state and passed to this
  component and rendered in a form to be edited by the user.
  
  Current bug: When clicking the edit buttons on two different items in a list, the input fields dont 
  change from the intial render. However when viewing the Elements in browser tools the text 
  updates correctly and using console.log you can see that the object is being passed to the component
  succesfully.*/}

function EducationEditor({ data }) {
  
  useEffect(() => {
    console.log(data);
  })
 
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
