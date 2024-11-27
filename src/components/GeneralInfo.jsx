import Button from "./Button"
import Input from "./Input"

{/*Renders the general info form, state is lifted to parent component so that,
   onChange, the names automatically update on the display component.*/}

function GeneralInfo({name, handleChangeName, surname, handleChangeSurname}){

    return(
        
        <div>
            <form id='general-info-form' className="entry-form">
                
                <fieldset id={'general-info-set'}>
                    <label  htmlFor="first-name-input">First Name: </label>
                    <Input  id={"first-name-input"} name={"first-name-input"} text={name} handleChange={handleChangeName}/>
                    <br/>
                    <label  htmlFor="surname-input"> Surname: </label>
                    <Input  id={"surname-input"} name={"surname-input"} text={surname} handleChange={handleChangeSurname}/>
                </fieldset>
            </form>
        </div>
    )
}

export default GeneralInfo