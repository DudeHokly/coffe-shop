import "./goodsCards.css";
import CoffeeMakerIcon from "@mui/icons-material/CoffeeMaker";
import GradeIcon from "@mui/icons-material/Grade";
import korreto from "../../imges/Goods/korretoGoods.jpg";
import mokko from "../../imges/Goods/mokkoGoods.jpg";
import romano from "../../imges/Goods/romanoGoods.jpg";
import espresso from "../../imges/Goods/espressoGoods.jpg";
import doppio from "../../imges/Goods/doppioGoods.jpg";
import latte from "../../imges/Goods/latteGoods.jpg";
import brevia from "../../imges/Goods/breviaGoods.jpg";
import fredo from "../../imges/Goods/fredoGoods.jpg";
import makima from "../../imges/Goods/makkimaGoods.jpg";

const goods = [
  {
    img: korreto,
    title: "Эспрессо",
    grade: [
      <GradeIcon />,
      <GradeIcon />,
      <GradeIcon />,
      <GradeIcon />,
      <GradeIcon />,
    ],
    price: "400р",
  },
  {
    img: mokko,
    title: "Доппио",
    grade: [<GradeIcon />, <GradeIcon />, <GradeIcon />],
    price: "700р",
  },
  {
    img: romano,
    title: "Латте",
    grade: [<GradeIcon />, <GradeIcon />, <GradeIcon />, <GradeIcon />],
    price: "350р",
  },
  {
    img: espresso,
    title: "Бревэ",
    grade: [<GradeIcon />, <GradeIcon />, <GradeIcon />, <GradeIcon />],
    price: "1000р",
  },
  {
    img: doppio,
    title: "Фредо",
    grade: [<GradeIcon />, <GradeIcon />, <GradeIcon />, <GradeIcon />],
    price: "600р",
  },
  {
    img: latte,
    title: "Маккиато",
    grade: [
      <GradeIcon />,
      <GradeIcon />,
      <GradeIcon />,
      <GradeIcon />,
      <GradeIcon />,
    ],
    price: "1200р",
  },
  {
    img: brevia,
    title: "Корретто",
    grade: [<GradeIcon />, <GradeIcon />, <GradeIcon />],
    price: "500р",
  },
  {
    img: fredo,
    title: "Мокко",
    grade: [
      <GradeIcon />,
      <GradeIcon />,
      <GradeIcon />,
      <GradeIcon />,
      <GradeIcon />,
    ],
    price: "1200р",
  },
  {
    img: makima,
    title: "Романо",
    grade: [<GradeIcon />, <GradeIcon />, <GradeIcon />, <GradeIcon />],
    price: "450р",
  },
];

function Carta({ elem }) {
  return (
    <div className="Carta">
      <img className="imgGoods" src={elem.img} />
      <div className="textRowGoods">
        <h2 className="textGoods">{elem.title}</h2>
        <p className="gradeGoods colorChangeGoods">{elem.grade}</p>
        <p className="priceGoods colorChangeGoods">{elem.price}</p>
        <a className="addBtn" href="#">
          Добавить в корзину
        </a>
      </div>
    </div>
  );
}

export default function GoodsCards() {
  const cardsJsx = goods.map((elem, i) => {
    return <Carta elem={elem} />;
  });
  return (
    <section className="cardsGoods">
      <div className="padBlockGoods _conteiner">
        <div className="upPartText">
          <h2 className="goodsText1">Наши товары</h2>
          <div className="elemLine">
            <div className="line"></div>
            <div className="line"></div>
            <CoffeeMakerIcon style={{ fontSize: 32 }} />
          </div>
        </div>
        <div className="CardsGoodsJsx">{cardsJsx}</div>
      </div>
    </section>
  );
}
