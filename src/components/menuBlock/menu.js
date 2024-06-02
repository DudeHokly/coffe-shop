import "./menu.css";
import ScrollElem from "./scrollElem";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { FaCartShopping } from "react-icons/fa6";
import { useState } from "react";
import { useCart } from "../globalShop/CartContext";

export default function MainMenu() {
  let [shopOpen, setShopOpen] = useState(false);
  const { cart, removeFromCart } = useCart();
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
              <li className="elemMainPage">
                <a href="#">ГЛАВНАЯ</a>
              </li>
              <li className="elemMainPage">
                <a href="#">НАПИТКИ</a>
                <ul className="DopWindow">
                  <li className="DopElemMainPage">Цены</li>
                  <li className="DopElemMainPage">Больше</li>
                </ul>
              </li>
              <li className="elemMainPage">
                <a href="#">ЭСПРЕССО</a>
                <ul className="DopWindow">
                  <li className="DopElemMainPage">Холодный</li>
                  <li className="DopElemMainPage">Горячий</li>
                  <li className="DopElemMainPage">Теплый</li>
                </ul>
              </li>
              <li className="elemMainPage">
                <a href="#">БОЛЬШЕ</a>
                <ul className="DopWindow">
                  <li className="DopElemMainPage">Цены</li>
                  <li className="DopElemMainPage">Больше</li>
                </ul>
              </li>
              <li className="elemMainPage">
                <a href="#">БЛОГ</a>
              </li>
              <li className="iconsMainPage">
                <a href="#">
                  <i className="profile">
                    <AccountCircleIcon style={{ fontSize: 29 }} />
                  </i>
                </a>
                <a href="#">
                  <i className="bin">
                    <FaCartShopping
                      className={`shop ${shopOpen && "active"}`}
                      style={{ fontSize: 27 }}
                      onClick={() => setShopOpen((shopOpen = !shopOpen))}
                    />
                  </i>
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
                      <div>
                        <h4 className="tShopCart">{item.title}</h4>
                        <p className="pShopCart">{item.price}</p>
                        <button
                          className="btnRemoveGoods"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </nav>
        </div>
        <ScrollElem />
      </div>
    </header>
  );
}
