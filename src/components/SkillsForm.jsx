import Input from "./elements/Input";
import Button from "./elements/Button";

function SkillsForm({ skillsArray, setSkillsArray }) {
  const skillFormSubmit = (event) => {
    event.preventDefault();
    const skillData = new FormData(event.target);
    let skillFormObject = Object.fromEntries(skillData.entries());
    skillFormObject.id = crypto.randomUUID();
    setSkillsArray([...skillsArray, skillFormObject]);
    console.log(skillsArray);
  };

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
