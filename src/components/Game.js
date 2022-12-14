import Card from "./Card";


function Game (props) {

    return (
        <div>
            {props.cards.map((el,index) => {
                return(
                    <div key={index}>
                        <Card card={el} />
                    </div>
                )})
            }
        </div>
    );
}
export default Game;