function Button({ handleClick, value, text, type }) {
  return (
    <button type={type} value={value} onClick={handleClick}>
      {text}
    </button>
  );
}

export default Button;
