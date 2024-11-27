import Button from "./Button"
import Input from "./Input"

const formSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.target)
    let formObject = Object.fromEntries(data.entries())
    console.log(formObject)
}
function EducationForm(){

    return(

        <>
            <form id={'education-form'} className={'new-education-form'} onSubmit={formSubmit}>
                
                <fieldset>
                    <label htmlFor={"education-name-input"}>Place of Education: </label>
                    <Input id={'education-name-input'} name={'education-name-input'} required={'required'}/>
                    <label htmlFor={"education-type-input"}>Type of Education: </label>
                    <Input id={'education-type-input'} name={'education-type-input'} text={'GCSE, A Levels etc.'} required={'required'}/>
                </fieldset>
                <fieldset>
                    <label htmlFor={"education-start-date"}>Start Date: </label>
                    <Input id={'education-start-date'} type={'date'} name={'education-start-date'} required={'required'}/>
                    <label htmlFor={"education-end-date"}>End Date: </label>
                    <Input id={'education-end-date'} type={'date'} name={'education-end-date'} required={'required'}/>
                </fieldset>
                <fieldset>
                    <label htmlFor={"education-grade-input"}>Grades Achieved: </label>
                    <textarea cols={'20'} rows={'5'} id={'education-grade-input'} name={'education-grade-input'} text={'Grade Received'} required={'required'}></textarea>
                </fieldset>
                <fieldset>
                <label htmlFor={"education-notes-input"}>Notes: </label>
                    <textarea cols={'20'} rows={'2'} id={'education-notes-input'} name={'education-notes-input'} text={'Grade Received'}></textarea>
                </fieldset>
                <fieldset>
                    <Button id={"education-submit-button"} className={'submit-button'} value={'Submit'}/>
                </fieldset>
            </form>
        </>

    )



}

export default EducationForm