import "./varieties.css";
import americano from "../../imges/amricanoVarities.jpg";
import espresso from "../../imges/espressoVarities.jpg";
import black from "../../imges/black.jpg";
import milk from "../../imges/milkCoffe.jpg";
import late from "../../imges/latteVarities.jpg";
import mocha from "../../imges/mocha.jpg";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";

const coffeCardVarieties = [
  {
    picture: americano,
    titleCoffe: "Americano Coffe",
  },
  {
    picture: espresso,
    titleCoffe: "Espresso Coffe",
    dudeImage: true,
  },
  {
    picture: black,
    titleCoffe: "Black Coffe",
  },
  {
    picture: black,
    titleCoffe: "Black Coffe",
  },
  {
    picture: milk,
    titleCoffe: "Milk Coffe",
  },
  {
    picture: mocha,
    titleCoffe: "Moccha Coffe",
    dudeImage: true,
  },
  {
    picture: late,
    titleCoffe: "Latte Coffe",
  },
  {
    picture: milk,
    titleCoffe: "Milk Coffe1",
  },
  {
    picture: black,
    titleCoffe: "Black Coffe",
  },
  {
    picture: black,
    titleCoffe: "Black Coffe",
  },
];

const generCards = coffeCardVarieties.map((elem, i) => {
  if (elem.dudeImage) {
    return <VarietiesSpecialCard elem={elem} />;
  } else {
    return <VarietiesCards elem={elem} />;
  }
});

function VarietiesCards({ elem }) {
  return (
    <div className="blockCard">
      <figure className="topPictureCoffe">
        <img
          src={elem.picture}
          alt="Фото Коффе"
          className="pictureCoffeVarities"
        ></img>
      </figure>
      <div className="textVaritiesBelow">
        <p className="textBelow1">{elem.titleCoffe}</p>
      </div>
    </div>
  );
}

function VarietiesSpecialCard({ elem }) {
  return (
    <div className="blockCard">
      <figure className="topPictureCoffe">
        <img
          src={elem.picture}
          alt="Фото Коффе"
          className="pictureCoffeVarities"
        ></img>
      </figure>
      <div className="textVaritiesBelow">
        <p className="textBelow1">{elem.titleCoffe}</p>
      </div>
    </div>
  );
}

export default function CoffeVarieties() {
  return (
    <section className="varieties">
      <div className="ContentVarities _conteiner">
        <div className="textVarities">
          <h1 className="goodsText1">Наши сорта Кофе</h1>
          <div className="elemLine limit">
            <div className="line"></div>
            <div className="line"></div>
            <EmojiFoodBeverageIcon style={{ fontSize: 32 }} />
          </div>
        </div>
        <div className="cardsVarities">{generCards}</div>
      </div>
    </section>
  );
}
