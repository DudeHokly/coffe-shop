import "./iconMenuBelow.css";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PaymentsIcon from "@mui/icons-material/Payments";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";

export default function IcnsBelow() {
  return (
    <section className="iconBlockBelow">
      <a className="btnBelowMenu">
        <LocalShippingIcon />
        <p>БЕСПЛАТНАЯ ДОСТАВКА ТОВАРОВ</p>
        <p>Для всех заказов на сумму более 3000р</p>
      </a>
      <a className="btnBelowMenu">
        <PaymentsIcon />
        <p>ОПЛАТА ПРИ ДОСТАВКЕ</p>
        <p>100% гарантия возврата денег</p>
      </a>
      <a className="btnBelowMenu">
        <AddIcCallIcon />
        <p>ПОМОЩЬ И ПОДДЕРЖКА</p>
        <p>Позвоните нам: +(7)993-24-55-55</p>
      </a>
    </section>
  );
}
