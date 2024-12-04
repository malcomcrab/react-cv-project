import Button from "./elements/Button";
import Input from "./elements/Input";

{
  /* Renders the education form.
    When the form is submitted its data is stored in state as an object through the formSubmit function
    in its parent component (App.jsx)
    */
}

function EducationForm({ educationData, setEducationData }) {
  //Turns form inputs into an object and saves to state
  const formSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    event.target.reset();
    let formObject = Object.fromEntries(data.entries());
    formObject.id = crypto.randomUUID();
    setEducationData([...educationData, formObject]);
    //console.log(formObject)
    //console.log(educationData[0])
  };

  return (
    <>
      <form
        id={"education-form"}
        className={"hidden-form"}
        onSubmit={formSubmit}
      >
        <fieldset>
          <label htmlFor={"schoolName"}>Place of Education: </label>
          <Input id={"schoolName"} name={"schoolName"} required={"required"} />
          <label htmlFor={"educationType"}>Type of Education: </label>
          <Input
            id={"educationType"}
            name={"educationType"}
            text={"GCSE, A Levels etc."}
            required={"required"}
          />
        </fieldset>
        <fieldset>
          <label htmlFor={"educationStart"}>Start Date: </label>
          <Input
            id={"educationStart"}
            type={"date"}
            name={"educationStart"}
            required={"required"}
          />
          <label htmlFor={"educationEnd"}>End Date: </label>
          <Input
            id={"educationEnd"}
            type={"date"}
            name={"educationEnd"}
            required={"required"}
          />
        </fieldset>
        <fieldset>
          <label htmlFor={"grade"}>Grades Achieved: </label>
          <textarea
            cols={"20"}
            rows={"5"}
            id={"grade"}
            name={"grade"}
            text={"Grade Received"}
            required={"required"}
          ></textarea>
        </fieldset>
        <fieldset>
          <label htmlFor={"educationNotes"}>Notes: </label>
          <textarea
            cols={"20"}
            rows={"2"}
            id={"educationNotes"}
            name={"educationNotes"}
            text={"Grade Received"}
          ></textarea>
        </fieldset>
        <div className="form-buttons">
          <Button text={"Submit"}></Button>
          <Button text={"Cancel"}></Button>
        </div>
      </form>
    </>
  );
}
export default EducationForm;
