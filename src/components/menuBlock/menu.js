import "./menu.css";
import ScrollElem from "./scrollElem";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { FaCartShopping } from "react-icons/fa6";
import { useState } from "react";
import { useCart } from "../globalShop/CartContext";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function MainMenu() {
  let [shopOpen, setShopOpen] = useState(false);
  const { cart, removeFromCart } = useCart();

  const [isMenu, setIsMenu] = useState(false);

  function menuClick() {
    setIsMenu(true);
  }
  function menuDisable() {
    setIsMenu(false);
  }

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
                          Удалить
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </nav>

          <div
            data-testid="menu-open"
            className="contentBurger"
            onClick={menuClick}
          >
            <a to="" className="defolt">
              <i className="logoBurger">
                <MenuIcon style={{ fontSize: 60 }} />
              </i>
            </a>
          </div>

          {isMenu ? (
            <div data-testid="menu" className="MenuMobile">
              <nav className="navMobile">
                <ul className="navigationMobile">
                  <li
                    data-testid="menu-close"
                    className="contentBurger"
                    onClick={menuDisable}
                  >
                    <a href="#" className="defoltMobile">
                      <i className="closeIcon">
                        <CloseIcon style={{ fontSize: 70 }} />
                      </i>
                    </a>
                  </li>
                  <li className="blockNavGl">
                    <a href="#" className="defoltMobile">
                      <i className="icon-right-open"></i>
                      Главная
                    </a>
                  </li>
                  <li className="blockNav">
                    <a href="#" className="defoltMobile">
                      <i className="icon-right-open"></i>
                      Напитки
                    </a>
                  </li>
                  <li className="blockNav">
                    <a href="#" className="defoltMobile">
                      <i className="icon-right-open"></i>
                      Эспрессо
                    </a>
                  </li>
                  <li className="blockNav">
                    <a href="#" className="defoltMobile">
                      <i className="icon-right-open"></i>
                      Больше
                    </a>
                  </li>
                  <li className="blockNav">
                    <a href="#" className="defoltMobile">
                      <i className="icon-right-open"></i>
                      Цены
                    </a>
                  </li>
                  <li className="blockNav">
                    <a href="#" className="defoltMobile">
                      <i className="icon-right-open"></i>
                      Блог
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          ) : (
            ""
          )}
        </div>
        <ScrollElem />
      </div>
    </header>
  );
}
