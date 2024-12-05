

function SkillEditor({ oldFormData, setSkillArray, skillArray }){

    return (
            <>
              <form key={oldFormData.id} value={oldFormData.id} onSubmit={handleSubmitChanges}
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

export default SkillEditor;