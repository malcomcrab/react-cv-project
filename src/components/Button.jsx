
function Button({handleClick, value, text, type, toggle}){

return (
    <button type={type} toggle={toggle} value={value} onClick={handleClick}>{text}</button>
)

}

export default Button;