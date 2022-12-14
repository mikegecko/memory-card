
function Card (props) {
    //Gotta add eventhandlers here i think
    return(
        <div className="card frosted font-face-gen">
            <img className="char" src={props.card.img} alt={props.card.name}/>
            <p>{props.card.name}</p>
        </div>
    );
}

export default Card;