import "./sub.css";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CakeIcon from "@mui/icons-material/Cake";

export default function SubscriveModule() {
  return (
    <section className="SubBlock">
      <div className="SubBlockContent _conteiner">
        <h3 className="textSub">ПОДПИСЫВАЙТЕСЬ НА НАШИ НОВОВСТИ</h3>
        <ul className="subIconsBlock">
          <li>
            <a href="#" className="iconSub">
              <SportsBasketballIcon style={{ fontSize: 35 }} className="dude" />
            </a>
          </li>
          <li>
            <a href="#" className="iconSub">
              <SportsMartialArtsIcon style={{ fontSize: 35 }} />
            </a>
          </li>
          <li>
            <a href="#" className="iconSub">
              <TelegramIcon style={{ fontSize: 35 }} />
            </a>
          </li>
          <li>
            <a href="#" className="iconSub">
              <YouTubeIcon style={{ fontSize: 35 }} />
            </a>
          </li>
          <li>
            <a href="#" className="iconSub cakeIcon">
              <CakeIcon style={{ fontSize: 35 }} />
            </a>
          </li>
        </ul>
        <form className="Contactform">
          <input
            className="ContactInput"
            type="Email"
            name="Email"
            placeholder="Введите ваш Email"
          />
          <span className="btn_Contact">
            <a href="#" to="/" className="ContactJoinLink">
              Отправить
            </a>
          </span>
        </form>
      </div>
    </section>
  );
}
