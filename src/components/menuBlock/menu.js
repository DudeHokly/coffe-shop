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
          <figure className="logo">
            <a>
              <i className="logoMainPage">
                <EmojiFoodBeverageIcon fontSize="100px" />
              </i>
            </a>
          </figure>
          <ul className="NavMenu">
            <li className="elemMainPage">ГЛАВНАЯ</li>
            <li className="elemMainPage">НАПИТКИ</li>
            <li className="elemMainPage">ЭСПРЕССО</li>
            <li className="elemMainPage">БОЛЬШЕ</li>
            <li className="elemMainPage">БЛОГ</li>
          </ul>
          <figure className="profile">
            <a>
              <i className="logoMainPage">
                <AccountCircleIcon />
              </i>
            </a>
          </figure>
          <figure className="bin">
            <a>
              <i className="logoMainPage">
                <CabinIcon />
              </i>
            </a>
          </figure>
        </div>
        <ScrollElem />
      </div>
    </header>
  );
}
