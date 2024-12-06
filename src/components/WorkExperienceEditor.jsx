import Button from "./elements/Button"
import Input from "./elements/Input"

function WorkExperienceEditor({ experienceEditData }){

    console.log(experienceEditData)

    const handleEditFormSubmit = event => {
        event.preventDefault();
        console.log(experienceEditData.id)
        createNewFormData(event.target)
    }

    function createNewFormData(formData){
        const newExperienceForm = new FormData(formData)
        let updatedExperienceObject = Object.fromEntries(newExperienceForm.entries())
        updatedExperienceObject.id = crypto.randomUUID()
        console.log(updatedExperienceObject)
        return updatedExperienceObject
    }

    return(

        <>
            <form key={experienceEditData.id}  onSubmit={handleEditFormSubmit} >
        <fieldset>
          <label htmlFor="experienceName">Name: </label>
          <Input id="experienceName" name="experienceName" type="text" text={experienceEditData.experienceName} />
          <label htmlFor="experienceRole">Role: </label>
          <Input id="experienceRole" name="experienceRole" text={experienceEditData.experienceRole}/>
        </fieldset>
        <fieldset>
          <label htmlFor="experienceStart">Start Date: </label>
          <Input id="experienceStart" name="experienceStart" type="date" text={experienceEditData.experienceStart}/>
          <label htmlFor="experienceEnd">End Date: </label>
          <Input id="experienceEnd" name="experienceEnd" type="date" text={experienceEditData.experienceEnd}/>
        </fieldset>
        <fieldset>
          <label htmlFor="responsibilities">
            Responsibilities/Skills Learned:{" "}
          </label>
          <textarea
            id="responsibilities"
            name="responsibilities"
            rows="4"
            text={experienceEditData.responsibilities}
          ></textarea>
        </fieldset>
        <fieldset>
          <label htmlFor="experienceNotes">Notes:</label>
          <textarea id="experienceNotes" name="experienceNotes" text={experienceEditData.experienceNotes}></textarea>
        </fieldset>
        <div className="form-buttons">
          <Button text={"Submit"}></Button>
          <Button text={"Cancel"}></Button>
        </div>
      </form>

        </>


    )


}

export default WorkExperienceEditor