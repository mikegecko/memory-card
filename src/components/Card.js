
function Card (props) {
    //Gotta add eventhandlers here i think
    return(
        <div>
            <img src={props.card.img} alt={props.card.name}/>
            <p>{props.card.name}</p>
        </div>
    );
}

export default Card;