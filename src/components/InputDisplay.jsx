import Button from './Button';
import inputIcon from '../assets/editIcon.svg'

function InputDisplay(props){

    return(
        <>
            <p>{props.value} <Button value={<img src={inputIcon}></img>} /></p>

        </>
    )
}

export default InputDisplay;