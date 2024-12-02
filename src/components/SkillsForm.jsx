import Input from "./Input";
import Button from "./Button";

function SkillsForm({ skillFormSubmit }) {
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

        <Button text={"Submit"}></Button>
        <Button text={"Cancel"}></Button>
      </form>
    </>
  );
}

export default SkillsForm;
