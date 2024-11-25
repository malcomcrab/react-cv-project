import Button from './Button';
import inputIcon from '../assets/editIcon.svg'
import { useState } from 'react';



const handleEditClick = (target) => {
    const toggleElement = document.getElementById(target)
    toggleElement.style.display === 'flex'? toggleElement.style.display = 'none' : toggleElement.style.display = 'flex'
  };


function InputDisplay(props){
    const [inputValue, setInputValue] = useState(props.value)
    const inputContainerId = (props.id + '-container')
    const inputElementId = (props.id + '-input')
    return(
        <div className={props.class}>
            <p>{inputValue} <Button handleClick={() => handleEditClick(inputContainerId)} value={<img src={inputIcon} ></img>} /></p>
            <div id={inputContainerId}>
                <input id={inputElementId} type={props.type} value={inputValue} onChange={(event)=>setInputValue(event.target.value)}/>
                <Button handleClick={() => handleEditClick(inputContainerId)} value={'Submit'}/>
            </div>
        </div>
    )
}

export default InputDisplay;