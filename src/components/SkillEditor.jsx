import Input from "./elements/Input";
import Button from "./elements/Button";

function SkillEditor({ skillEditData, setSkillsArray, skillsArray }){

  
  const handleSkillEditSubmit = (event) => {
    event.preventDefault()
    replaceEntry(createNewFormObject(event))
    event.target.reset()
  }
    function createNewFormObject(event){
      const updatedSkillEntry = new FormData(event.target)
      let updatedSkillFormObject = Object.fromEntries(updatedSkillEntry.entries())
      updatedSkillFormObject.id = crypto.randomUUID()
      console.log(updatedSkillFormObject)
      return (updatedSkillFormObject)
    }
   

  function replaceEntry(newFormData){
      let filteredArray = skillsArray.filter((item) => item.id != skillEditData.id)
       setSkillsArray([...filteredArray, newFormData])
    }
  

    return (
            <>
              <form key={skillEditData.id} value={skillEditData.id} onSubmit={handleSkillEditSubmit}
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