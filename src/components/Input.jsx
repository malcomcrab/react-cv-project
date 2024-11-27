


function Input({handleChange, text, id, name, type, required}) {
    return (
        <input id={id} name={name} type={type} onChange={handleChange} placeholder={text} defaultValue={text} required={required}></input>
    )
}
export default Input;