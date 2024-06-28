import './styles.css'

function Card (){
    return <div className="card">
        <img className="avatar" alt="userAvatar" src="https://www.horizont.net/news/media/17/Homer-Simpson-166443-detailpp.jpeg"></img>
        <p className="text">Name: Homer Simpson</p>
        <p className="text">Job: low-level safety inspector</p>
        <p className="text">Hobby: watching TV</p>
    </div>
}

export default Card;