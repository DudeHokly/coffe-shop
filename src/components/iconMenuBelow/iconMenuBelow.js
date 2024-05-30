import "./iconMenuBelow.css";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PaymentsIcon from "@mui/icons-material/Payments";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";

export default function IcnsBelow() {
  return (
    <section className="iconBlockBelow">
      <div className="ContetntIconPage">
        <a className="btnBelowMenu">
          <LocalShippingIcon style={{ fontSize: 32 }} />
          <div className="textIconMenu">
            <p>БЕСПЛАТНАЯ ДОСТАВКА ТОВАРОВ</p>
            <p>Для всех заказов более 3000р</p>
          </div>
        </a>
        <a className="btnBelowMenu">
          <PaymentsIcon style={{ fontSize: 32 }} />
          <div className="textIconMenu">
            <p>ОПЛАТА ПРИ ДОСТАВКЕ</p>
            <p>100% гарантия возврата денег</p>
          </div>
        </a>
        <a className="btnBelowMenu">
          <AddIcCallIcon style={{ fontSize: 32 }} />
          <div className="textIconMenu">
            <p>ПОМОЩЬ И ПОДДЕРЖКА</p>
            <p>Позвоните: +(7)993-24-55-55</p>
          </div>
        </a>
      </div>
    </section>
  );
}
