
function Button({handleClicks, value, type}){

return (
    <button type={type} onClick={handleClicks} >{value}</button>
)

}

export default Button;