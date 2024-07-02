import "./styles.css";

function Input({id, name, type, placeholder, label }) {
  return (
    <div>
      <div className="input-fields">
        <label htmlFor={id}>{label}</label>
        <input
          className="input"
          id={id}
          name={name}
          placeholder={placeholder}
          type={type}
        />
      </div>
    </div>
  );
}

export default Input;
