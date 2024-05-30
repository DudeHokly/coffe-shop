import "./menu.css";
import ScrollElem from "./scrollElem";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CabinIcon from "@mui/icons-material/Cabin";

export default function MainMenu() {
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
                    <AccountCircleIcon style={{ fontSize: 28 }} />
                  </i>
                </a>
                <a href="#">
                  <i className="bin">
                    <CabinIcon style={{ fontSize: 28 }} />
                  </i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <ScrollElem />
      </div>
    </header>
  );
}
