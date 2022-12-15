import Card from "./Card";

function Game(props) {
  return (
    <div className="container">
      {props.cards.map((el, index) => {
        if (index < 12) {
          return (
            <div id={el.id} key={index} className="card-container" onClick={(e) => {props.clickHandler(e)}} >
              <Card card={el} />
            </div>
          );
        }
        return;
      })}
    </div>
  );
}
export default Game;
