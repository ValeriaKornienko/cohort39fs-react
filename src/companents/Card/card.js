import './styles.css'

function Card ({userData}){
    const {avatar, firstName, lastName, job, hobby} = userData;

    return (<div className="card">
        <img className="avatar" alt="userAvatar" src={avatar} ></img>
        <p className="text">Name: {firstName} {lastName} </p>
        <p className="text">Job: {job}</p>
        <p className="text">Hobby: {hobby}</p>
    </div>)
}

export default Card;