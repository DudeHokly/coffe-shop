import "./varieties.css";
import americano from "../../imges/varities/americanoC.jpg";
import espresso from "../../imges/varities/espressoC.jpg";
import mocha from "../../imges/varities/mocchaC.jpg";
import late from "../../imges/varities/latteC.jpg";
import black from "../../imges/varities/blackC.jpg";
import milk from "../../imges/varities/milkC.jpg";
import ristretto from "../../imges/varities/ristretto.jpg";
import makiatto from "../../imges/varities/makiatto.jpg";
import raf from "../../imges/varities/rafC.jpg";
import Giga from "../../imges/varities/GigaC.jpg";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";

const coffeCardVarieties = [
  {
    picture: americano,
    titleCoffe: "Americano Coffe",
  },
  {
    picture: espresso,
    titleCoffe: "Espresso Coffe",
  },
  {
    picture: raf,
    titleCoffe: "Raf Coffe",
    dudeImage: true,
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
  },
  {
    picture: late,
    titleCoffe: "Latte Coffe",
  },
  {
    picture: Giga,
    titleCoffe: "Giga Coffe",
    dudeImage: true,
  },
  {
    picture: ristretto,
    titleCoffe: "Ristretto Coffe",
  },
  {
    picture: makiatto,
    titleCoffe: "Makiatto Coffe",
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
      <figure className="topPictureSpecialCoffe">
        <img
          src={elem.picture}
          alt="Фото Коффе"
          className="pictureCoffeSpecialVarities"
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
