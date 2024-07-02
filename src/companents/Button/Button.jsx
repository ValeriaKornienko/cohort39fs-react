import "./styles.css";

function Button({ type, name, onClick}) {
  return (
    <button onClick={onClick} className="button-component" type={type}>
      {name}
    </button>
  );
}

export default Button;
