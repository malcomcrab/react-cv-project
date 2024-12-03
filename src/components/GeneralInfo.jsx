import Input from "./Input";

{
  /*Renders the general info form, state is lifted to parent component so that,
   onChange, the names automatically update on the display component.*/
}

function GeneralInfo({
  name,
  handleChangeName,
  surname,
  handleChangeSurname,
  jobRole,
  handleChangeJobRole,
}) {
  return (
   
      <form id="general-info-form" className={"hidden-form"}>
        <fieldset id={"general-info-set"}>
          <label htmlFor="firstName">First Name: </label>
          <Input
            id={"firstName"}
            name={"firstName"}
            text={name}
            handleChange={handleChangeName}
          />
          <br />
          <label htmlFor="surnameInput"> Surname: </label>
          <Input
            id={"surnameInput"}
            name={"surnameInput"}
            text={surname}
            handleChange={handleChangeSurname}
          />
          <br />
          <label htmlFor="jobRole">Job Title: </label>
          <Input
            id={"jobRole"}
            name={"jobRole"}
            text={jobRole}
            handleChange={handleChangeJobRole}
          />
        </fieldset>
      </form>
  );
}

export default GeneralInfo;
