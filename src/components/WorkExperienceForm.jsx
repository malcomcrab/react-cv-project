import Input from "./Input";
import Button from "./Button";

function WorkExperienceForm({ experienceFormSubmit }) {
  return (
    <>
      <form
        onSubmit={experienceFormSubmit}
        id="experience-form"
        className="hidden-form"
      >
        <fieldset>
          <label htmlFor="experienceName">Name: </label>
          <Input id="experienceName" name="experienceName" type="text" />
          <label htmlFor="experienceRole">Role: </label>
          <Input id="experienceRole" name="experienceRole" />
        </fieldset>
        <fieldset>
          <label htmlFor="experienceStart">Start Date: </label>
          <Input id="experienceStart" name="experienceStart" type="date" />
          <label htmlFor="experienceEnd">End Date: </label>
          <Input id="experienceEnd" name="experienceEnd" type="date" />
        </fieldset>
        <fieldset>
          <label htmlFor="responsibilities">
            Responsibilities/Skills Learned:{" "}
          </label>
          <textarea
            id="responsibilities"
            name="responsibilities"
            rows="4"
          ></textarea>
        </fieldset>
        <fieldset>
          <label htmlFor="experienceNotes">Notes:</label>
          <textarea id="experienceNotes" name="experienceNotes"></textarea>
        </fieldset>
        <div className="form-buttons">
          <Button text={"Submit"}></Button>
          <Button text={"Cancel"}></Button>
        </div>
      </form>
    </>
  );
}

export default WorkExperienceForm;
