import Button from './Button';
import inputIcon from '../assets/editIcon.svg'
import Input from './Input';

function InputDisplay(props){

    return(
        <div>
            <Input type={props.type} value={props.value}/>
            <Button value={'Submit'}/>
            <p>{props.value} <Button value={<img src={inputIcon}></img>} /></p>
        </div>
    )
}

export default InputDisplay;