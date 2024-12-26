import "./menu.css";
import ScrollElem from "./scrollElem";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { FaCartShopping } from "react-icons/fa6";
import { useState } from "react";
import { useCart } from "../globalShop/CartContext";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const NAV_ITEMS = [
  { label: "ГЛАВНАЯ", link: "#" },
  {
    label: "НАПИТКИ",
    link: "#",
    subItems: ["Цены", "Больше"],
  },
  {
    label: "ЭСПРЕССО",
    link: "#",
    subItems: ["Холодный", "Горячий", "Теплый"],
  },
  {
    label: "БОЛЬШЕ",
    link: "#",
    subItems: ["Цены", "Больше"],
  },
  { label: "БЛОГ", link: "#" },
];

const NavItem = ({ label, link, subItems }) => (
  <li className="elemMainPage">
    <a href={link}>{label}</a>
    {subItems && (
      <ul className="DopWindow">
        {subItems.map((item, index) => (
          <li key={index} className="DopElemMainPage">
            {item}
          </li>
        ))}
      </ul>
    )}
  </li>
);

export default function MainMenu() {
  const [shopOpen, setShopOpen] = useState(false);
  const { cart, removeFromCart, cartCount, cartSum } = useCart();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header classname="header">
      <div classname="menu">
        <div className="NavMenuBlock">
          <figure className="logoMainCoffe">
            <a href="#">
              <i className="logoMainPage">
                <EmojiFoodBeverageIcon style={{ fontSize: 70 }} />
              </i>
            </a>
          </figure>
          <nav className="navBlock">
            <ul className="NavMenu">
              {NAV_ITEMS.map((item, index) => (
                <NavItem key={index} {...item} />
              ))}
              <li className="iconsMainPage">
                <a href="#">
                  <AccountCircleIcon style={{ fontSize: 29 }} />
                </a>
                <a href="#">
                  <FaCartShopping
                    className={`shop ${shopOpen ? "active" : ""}`}
                    style={{ fontSize: 27 }}
                    onClick={() => setShopOpen((prev) => !prev)}
                  />
                  <span className="cartCount">{cartCount}</span>
                </a>
              </li>
            </ul>
            {shopOpen && (
              <div className="shopCard">
                {cart.length === 0 ? (
                  <p className="shopBinText">В корзине пока пусто</p>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="cartItem">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="cartImg"
                      />
                      <div className="shoppingCartdiv">
                        <h4 className="tShopCart">{item.title}</h4>
                        <p className="pShopCart">{item.price} руб.</p>
                        <p className="quantityShopCart">
                          Количество: {item.quantity}
                        </p>
                        <button
                          className="btnRemoveGoods"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Удалить
                        </button>
                      </div>
                    </div>
                  ))
                )}
                <p className="sumShoppingCart">
                  Сумма к оплате: {cartSum} pуб.
                </p>
              </div>
            )}
          </nav>

          <div
            data-testid="menu-open"
            className="contentBurger"
            onClick={() => setIsMenuOpen(true)}
          >
            <a to="" className="defolt">
              <i className="logoBurger">
                <MenuIcon style={{ fontSize: 60 }} />
              </i>
            </a>
          </div>

          {isMenuOpen && (
            <div className="MenuMobile">
              <nav className="navMobile">
                <ul className="navigationMobile">
                  <li
                    className="contentBurger"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <CloseIcon style={{ fontSize: 70 }} />
                  </li>
                  {NAV_ITEMS.map((item, index) => (
                    <li key={index} className="blockNav">
                      <a href={item.link}>{item.label}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          )}
        </div>
        <ScrollElem />
      </div>
    </header>
  );
}
