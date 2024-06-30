import './styles.css';


function Button({type = "submit", name = "Login"}) {

    return (<button className="button-component" type= {type}>
    {name}
  </button>)
}

export default Button;