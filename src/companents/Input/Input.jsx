import "./styles.css";

function Input ({inputData}){
    const {name, type, placeholder, label} = inputData;
    
    return <div>
        <div className="input-fields">
        <label>{label}</label>
        <input className="input" name={name} placeholder={placeholder} type={type} />
        </div>
    </div>

}

export default Input;