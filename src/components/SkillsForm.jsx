import Input from "./Input";
import Button from "./Button";

function SkillsForm(){

    return(

        <>
            <form id={'skills-form'}>

                <fieldset>
                    <label htmlFor="skillTitle">Skill Name: </label>
                    <Input id={'skillTitle'} name={'skillTitle'} type={'text'} required={'required'}/>
                </fieldset>

                <Button text={'Submit'}></Button>
                <Button text={'Cancel'}></Button>
            </form>
        </>
    )
}

export default SkillsForm