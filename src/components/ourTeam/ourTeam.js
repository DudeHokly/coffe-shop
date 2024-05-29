import "./ourTeam.css";
import dude_barista1 from "../../imges/barista1.jpg";
import dude_barista2 from "../../imges/barista2.jpg";
import dude_barista3 from "../../imges/barista3.png";
import dude_barista4 from "../../imges/barista4.jpg";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CakeIcon from "@mui/icons-material/Cake";
import CoffeeMakerIcon from "@mui/icons-material/CoffeeMaker";

const teamBarists = [
  {
    img: dude_barista1,
    title: "Гига Бариста",
    jobTitle: "Варит Кофэ",
  },
  {
    img: dude_barista2,
    title: "Гига Бариста",
    jobTitle: "Варит Кофэ",
  },
  {
    img: dude_barista3,
    title: "Гига Бариста",
    jobTitle: "Варит Кофэ",
  },
  {
    img: dude_barista4,
    title: "Гига Бариста",
    jobTitle: "Варит Кофэ",
  },
];

function CartaTeam({ elem }) {
  return (
    <div className="Card">
      <div className="forPhotoDude">
        <img className="photoBarista" src={elem.img} />
      </div>
      <div className="textBelowBarista">
        <h3 className="titleBarista">{elem.title}</h3>
        <h5 className="jobTitleBarista">{elem.jobTitle}</h5>
        <div className="iconsBarista">
          <ul className="iconsBlockBarista">
            <li>
              <a href="#" className="iconTeam">
                <SportsBasketballIcon style={{ fontSize: 28 }} />
              </a>
            </li>
            <li>
              <a href="#" className="iconTeam">
                <TelegramIcon style={{ fontSize: 28 }} />
              </a>
            </li>
            <li>
              <a href="#" className="iconTeam">
                <YouTubeIcon style={{ fontSize: 28 }} />
              </a>
            </li>
            <li>
              <a href="#" className="iconTeam">
                <CakeIcon style={{ fontSize: 28 }} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function OurTeam() {
  const cardJs = teamBarists.map((elem, i) => {
    return <CartaTeam elem={elem} />;
  });
  return (
    <section className="BlockTeam">
      <div className="ContentTeam _conteiner">
        <h1 className="goodsText1">Наши Профессионалы</h1>
        <div className="elemLine">
          <div className="line"></div>
          <div className="line"></div>
          <CoffeeMakerIcon style={{ fontSize: 32 }} />
        </div>
        <div className="ContentCard">{cardJs}</div>
      </div>
    </section>
  );
}
