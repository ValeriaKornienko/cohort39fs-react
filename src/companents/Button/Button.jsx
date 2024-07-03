import "./styles.css";

function Button({name, type, src, alt, onClick}) {
  return (
    <button onClick={onClick} className="button-component" type={type}> {name}
      <img class="icon" src={src} alt={alt} />
    </button>
  );
}

export default Button;
