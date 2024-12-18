import Button from "./elements/Button";
import Input from "./elements/Input";

{
  /* When an edit button is clicked on one of the data lists its stored to state and passed to this
  component and rendered in a form to be edited by the user.
  
  Current bug: When clicking the edit buttons on two different items in a list, the input fields dont 
  change from the intial render. However when viewing the Elements in browser tools the text 
  updates correctly and using console.log you can see that the object is being passed to the component
  succesfully.*/
}

function EducationEditor({ data, educationData, setEducationData }) {
  const handleSubmitChanges = (event) => {
    event.preventDefault();
    replaceItem(updatedFormObject(event));
    event.target.reset();
  };

  function updatedFormObject(event) {
    const updatedForm = new FormData(event.target);
    let formObject = Object.fromEntries(updatedForm.entries());
    formObject.id = crypto.randomUUID();
    return formObject;
  }

  function replaceItem(newFormData) {
    let filteredArray = educationData.filter((item) => item.id != data.id);
    setEducationData([...filteredArray, newFormData]);
  }

  return (
    <form key={data.id} value={data.id} onSubmit={handleSubmitChanges}>
      <Input
        id={"education-name-input"}
        name={"schoolName"}
        text={data.schoolName}
        required={"required"}
      />

      <Input
        id={"education-type-input"}
        name={"educationType"}
        text={data.educationType}
        required={"required"}
      />

      <Input
        id={"education-start-input"}
        name={"educationStart"}
        text={data.educationStart}
        type={"date"}
        required={"required"}
      />

      <Input
        id={"education-end-input"}
        name={"educationEnd"}
        text={data.educationEnd}
        type={"date"}
        required={"required"}
      />

      <Input
        id={"education-grade-input"}
        name={"grade"}
        text={data.grade}
        required={"required"}
      />

      <Input
        id={"education-notes-input"}
        name={"educationNotes"}
        text={data.educationNotes}
      />
      <Button text={"save"} value={data.id} />
    </form>
  );
}

export default EducationEditor;
