import Tilt from "react-parallax-tilt";

function Card(props) {
  //Gotta add eventhandlers here i think
  return (
    <Tilt glareEnable={true} glareBorderRadius="16px" glareMaxOpacity={0.6} glarePosition='all' scale={1.1}>
      <div className="card frosted font-face-gen data-tilt">
        <img className="char" src={props.card.img} alt={props.card.name} />
        <p>{props.card.name}</p>
      </div>
    </Tilt>
  );
}

export default Card;
