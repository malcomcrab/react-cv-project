import Input from "./Input";
import Button from "./Button";

function SkillsForm({ skillFormSubmit}) {
  return (
    <>
      <form
        id={"skills-form"}
        className="hidden-form"
        onSubmit={skillFormSubmit}
      >
        <fieldset>
          <label htmlFor="skillTitle">Skill Name: </label>
          <Input
            id={"skillTitle"}
            name={"skillTitle"}
            type={"text"}
            required={"required"}
          />
        </fieldset>
        <div className="form-buttons">
          <Button text={"Submit"}></Button>
          <Button text={"Cancel"}></Button>
        </div>
        
      </form>
    </>
  );
}

export default SkillsForm;
