import "./elemNameCof.css";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";

export default function ElemCoffeName() {
  return (
    <section className="nameCoffe _conteiner">
      <div className="textVarities">
        <h1 className="goodsText1">ОТЗЫВЫ НАШИХ КЛИЕНТОВ</h1>
        <div className="elemLine limit">
          <div className="line"></div>
          <div className="line"></div>
          <EmojiFoodBeverageIcon style={{ fontSize: 32 }} />
        </div>
      </div>
    </section>
  );
}
