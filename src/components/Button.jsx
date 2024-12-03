function Button({ handleClick, value, text, type, className}) {
  return (
    <button type={type} value={value} onClick={handleClick} className={className}>
      {text}
    </button>
  );
}

export default Button;
