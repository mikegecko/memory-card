

function Scoreboard (props) {

    return(
        <div className="header frosted">
            <h1 className="title font-face-gen">Genshin Memory</h1>
            <div className="score">
                <div>Score: {props.score}</div>
                <div>Highscore: {props.best}</div>
            </div>
        </div>
    );
}

export default Scoreboard;