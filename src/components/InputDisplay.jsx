import Button from './Button';
import inputIcon from '../assets/editIcon.svg'
import Input from './Input';



const handleButtonClick = (target) => {
    const toggleElement = document.getElementById(target)
    toggleElement.style.display === 'flex'? toggleElement.style.display = 'none' : toggleElement.style.display = 'flex'
    
  };


function InputDisplay(props){

    const idss = (props.id + '-input')

    return(
        <div className={props.class}>
            <p>{props.value} <Button handleClick={() => handleButtonClick(idss)} value={<img src={inputIcon} ></img>} /></p>
            <div id={idss}>
                <Input type={props.type} value={props.value}/>
                <Button  value={'Submit'}/>
            </div>
        </div>
    )
}

export default InputDisplay;