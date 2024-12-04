function Input({ handleChange, text, id, name, type, required }) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      onChange={handleChange}
      text={text}
      defaultValue={text}
      required={required}
    ></input>
  );
}
export default Input;
