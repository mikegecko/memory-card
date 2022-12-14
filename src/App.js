import "./App.css";
import Scoreboard from "./components/Scoreboard";
import Game from "./components/Game";
import { useEffect, useState } from "react";

/* 
  -------TODO------

    1. state w/ randomized array of characters
      - a function to re-randomize the array
      - a handler for randomizing the order when a card is clicked
    2. state w/ all the clicked characters
      - handler for checking if the character has already been clicked
      - counter for how many rounds have passed
    3. useEffect hooks for using proper lifecycle methods
      - a loss resulting in unmounting
      - oncomponentmount() we display the cards in a random order

    - NOTE: There is alot of overlap in these items
    
  */
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
export const images = importAll(
  require.context("./images/characters", false, /\.(png|jpe?g|svg)$/)
);
function App() {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);

  const createCards = () => {
    let cardArray = [];
    fileNames.forEach((element, index) => {
      let name = element;
      name = name.slice(0, -4);
      let card = {
        name: name,
        id: index,
        src: element,
        img: images[element],
        clicked: false,
      };
      cardArray.push(card);
    });
    return cardArray;
  };

  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    console.log(array);
    return array;
  };

  useEffect(() => {
    //ComponentDidMount - runs once on creation
    //If you leave out the array, it will run on every update
    //Add a return statement for componentWillUnmount
    setCards(createCards());
  }, []);

  useEffect(() => {
    //ComponentDidUpdate - runs whenever the dependecy (cards) changes
  }, [cards]);

  return (
    <div className="App">
      <Scoreboard score={score} best={best} />
      <Game cards={cards} />
    </div>
  );
}

export const fileNames = [
  "Albedo.png",
  "Aloy.png",
  "Amber.png",
  "Ayaka.png",
  "Ayato.png",
  "Barbara.png",
  "Beidou.png",
  "Bennett.png",
  "Candace.png",
  "Childe.png",
  "Chongyun.png",
  "Collei.png",
  "Cyno.png",
  "Diluc.png",
  "Diona.png",
  "Dori.png",
  "Eula.png",
  "Faruzan.png",
  "Fischl.png",
  "Ganyu.png",
  "Gorou.png",
  "Heizou.png",
  "Hu Tao.png",
  "Itto.png",
  "Jean.png",
  "Kaeya.png",
  "Kazuha.png",
  "Keqing.png",
  "Klee.png",
  "Kokomi.png",
  "Kuki Shinobu.png",
  "Layla.png",
  "Lisa.png",
  "Mona.png",
  "Nahida.png",
  "Nilou.png",
  "Ningguang.png",
  "Noelle.png",
  "Qiqi.png",
  "Raiden.png",
  "Razor.png",
  "Rosaria.png",
  "Sara.png",
  "Sayu.png",
  "Shenhe.png",
  "Sucrose.png",
  "Thoma.png",
  "Tighnari.png",
  "Traveler.png",
  "Venti.png",
  "Wanderer.png",
  "Xiangling.png",
  "Xiao.png",
  "Xingqiu.png",
  "Xinyan.png",
  "Yae Miko.png",
  "Yanfei.png",
  "Yelan.png",
  "Yoimiya.png",
  "Yun Jin.png",
  "Zhongli.png",
];
export default App;