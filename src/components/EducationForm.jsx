import Button from "./Button"
import Input from "./Input"

{/* Renders the education form.
    When the form is submitted its data is stored in state as an object through the formSubmit function
    in its parent component (App.jsx)
    */}

function EducationForm({formSubmit}){

    return(

        <>
            <form id={'education-form'} className={'new-education-form'} onSubmit={formSubmit}>
                
                <fieldset>
                    <label htmlFor={"schoolName"}>Place of Education: </label>
                    <Input id={'education-name-input'} name={'schoolName'} required={'required'}/>
                    <label htmlFor={"educationType"}>Type of Education: </label>
                    <Input id={'education-type-input'} name={'educationType'} text={'GCSE, A Levels etc.'} required={'required'}/>
                </fieldset>
                <fieldset>
                    <label htmlFor={"educationStart"}>Start Date: </label>
                    <Input id={'education-start-date'} type={'date'} name={'educationStart'} required={'required'}/>
                    <label htmlFor={"educationEnd"}>End Date: </label>
                    <Input id={'education-end-date'} type={'date'} name={'educationEnd'} required={'required'}/>
                </fieldset>
                <fieldset>
                    <label htmlFor={"grade"}>Grades Achieved: </label>
                    <textarea cols={'20'} rows={'5'} id={'education-grade-input'} name={'grade'} text={'Grade Received'} required={'required'}></textarea>
                </fieldset>
                <fieldset>
                <label htmlFor={"educationNotes"}>Notes: </label>
                    <textarea cols={'20'} rows={'2'} id={'education-notes-input'} name={'educationNotes'} text={'Grade Received'}></textarea>
                </fieldset>
                <fieldset>
                    <Button id={"education-submit-button"} className={'submit-button'} value={'Submit'}/>
                </fieldset>
            </form>
        </>
    )
}
export default EducationForm