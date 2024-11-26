import Button from "./Button"
import Input from "./Input"

function EducationForm(){

    return(

        <>
            <form id={'education-form'} className={'new-education-form'}>
                
                <fieldset>
                    <label htmlFor={"education-name-input"}>Place of Education: </label>
                    <Input id={'education-name-input'} name={'education-name-input'}/>
                    <label htmlFor={"education-type-input"}>Type of Education: </label>
                    <Input id={'education-type-input'} name={'education-type-input'} text={'GCSE, A Levels etc.'}/>
                </fieldset>
                <fieldset>
                    <label htmlFor={"education-start-date"}>Start Date: </label>
                    <Input id={'education-start-date'} name={'education-start-date'} />
                    <label htmlFor={"education-end-date"}>End Date: </label>
                    <Input id={'education-end-date'} name={'education-end-date'} />
                </fieldset>
                <fieldset>
                    <label htmlFor={"education-grade-input"}>Grades Achieved: </label>
                    <textarea cols={'20'} rows={'5'} id={'education-grade-input'} name={'education-grade-input'} text={'Grade Received'}></textarea>
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