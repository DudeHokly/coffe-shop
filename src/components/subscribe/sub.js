import "./sub.css";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CakeIcon from "@mui/icons-material/Cake";

export default function SubscriveModule() {
  return (
    <section className="SubBlock">
      <h3 className="ПОДПИСЫВАЙТЕСЬ НА НАШИ НОВОВСТИ"></h3>
      <ul className="subIconsBlock">
        <li>
          <i className="iconSub">
            <SportsBasketballIcon />
          </i>
        </li>
        <li>
          <i className="iconSub">
            <SportsMartialArtsIcon />
          </i>
        </li>
        <li>
          <i className="iconSub">
            <TelegramIcon />
          </i>
        </li>
        <li>
          <i className="iconSub">
            <YouTubeIcon />
          </i>
        </li>
        <li>
          <i className="iconSub">
            <CakeIcon />
          </i>
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
          <a to="/" className="ContactJoinLink">
            Отправить
          </a>
        </span>
      </form>
    </section>
  );
}
