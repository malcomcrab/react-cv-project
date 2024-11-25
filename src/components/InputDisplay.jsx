import Button from './Button';
import inputIcon from '../assets/editIcon.svg'
import Input from './Input';

function InputDisplay(props){

    return(
        <div className={props.class}>
            <p>{props.value} <Button value={<img src={inputIcon}></img>} /></p>
            <Input type={props.type} value={props.value}/>
            <Button value={'Submit'}/>
        </div>
    )
}

export default InputDisplay;