import Button from "./Button"
import Input from "./Input";
function UserInput(){

    return(
        <>
            <Input type={'text'} value={'First Name'}/>
            <Button value={'submit'}/>
        </>
    )
}

export default UserInput;