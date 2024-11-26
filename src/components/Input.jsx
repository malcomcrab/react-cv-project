
function Input({ handleChange, text, id, name, }) {
    return (
        <input id={id} name={name} onChange={handleChange} placeholder={text} defaultValue={text}></input>
    )
}
export default Input;