import './styles.css'
function Button({button}) {
    const {type, name} = button;

    
    return <button className="button-component" type={type}>{name}</button>
}

export default Button;