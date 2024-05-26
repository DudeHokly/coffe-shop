import "./goodsCards.css";
import GradeIcon from "@mui/icons-material/Grade";
import CoffeeMakerIcon from "@mui/icons-material/CoffeeMaker";

const goods = [
  {
    img: <GradeIcon />,
    title: "",
    grade: <GradeIcon />,
    price: "400р",
    addBtn: "Добавить в корзину",
  },
  {
    img: <GradeIcon />,
    title: "",
    grade: <GradeIcon />,
    price: "400р",
    addBtn: "Добавить в корзину",
  },
  {
    img: <GradeIcon />,
    title: "",
    grade: <GradeIcon />,
    price: "400р",
    addBtn: "Добавить в корзину",
  },
  {
    img: <GradeIcon />,
    title: "",
    grade: <GradeIcon />,
    price: "400р",
    addBtn: "Добавить в корзину",
  },
  {
    img: <GradeIcon />,
    title: "",
    grade: <GradeIcon />,
    price: "500р",
    addBtn: "Добавить в корзину",
  },
  {
    img: <GradeIcon />,
    title: "",
    grade: <GradeIcon />,
    price: "500р",
    addBtn: "Добавить в корзину",
  },
  {
    img: <GradeIcon />,
    title: "",
    grade: <GradeIcon />,
    price: "500р",
    addBtn: "Добавить в корзину",
  },
  {
    img: <GradeIcon />,
    title: "",
    grade: <GradeIcon />,
    price: "500р",
    addBtn: "Добавить в корзину",
  },
];

function Carta({ elem }) {
  return (
    <div className="Carta">
      <div className="imgGoods">{elem.img}</div>
      <h2 className="textGoods">{elem.title}</h2>
      <p className="gradeGoods">{elem.grade}</p>
      <p className="gradeGoods">{elem.price}</p>
      <a className="addBtn">{elem.addBtn}</a>
    </div>
  );
}

export default function GoodsCards() {
  const cardsJsx = goods.map((elem, i) => {
    return <Carta elem={elem} />;
  });
  return (
    <section className="cardsGoods">
      <h2 className="goodsText1">Наши товары</h2>
      <CoffeeMakerIcon />
      <div className="CardsGoodsJsx">{cardsJsx}</div>
    </section>
  );
}
