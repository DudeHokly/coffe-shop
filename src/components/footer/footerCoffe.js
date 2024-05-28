import "./footerCoffe.css";
import BakeryDiningIcon from "@mui/icons-material/BakeryDining";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import "../../icons/css/fontello.css";

export default function FooterCoffe() {
  return (
    <section className="FooterSection">
      <div className="ball _placeIcon">
        <figure className="footerLeft_icon">
          <i className="kursan">
            <BakeryDiningIcon style={{ fontSize: 300 }} />
          </i>
        </figure>
      </div>
      <div className="ball _placeIcon">
        <figure className="footerRight_icon">
          <i className="kursan">
            <BakeryDiningIcon style={{ fontSize: 300 }} />
          </i>
        </figure>
      </div>
      <div className="conteinerFooter _conteiner">
        <div className="contentgDiv">
          <div className="CardFooter">
            <div className="aboutCard padAbout1">
              <figure className="logo">
                <a href="#">
                  <i className="logoFooterPage">
                    <EmojiFoodBeverageIcon fontSize="120px" color="white" />
                  </i>
                </a>
              </figure>
              <p>Coffe With Dude's Love</p>
              <ul className="footIcons">
                <li>
                  <a href="#" alt="Иконка">
                    <i className="icon-paper-plane"></i>
                  </a>
                </li>
                <li>
                  <a href="#" alt="Иконка">
                    <i className="icon-github-squared"></i>
                  </a>
                </li>
                <li>
                  <a href="#" alt="Иконка">
                    <i className="icon-steam"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__navigation">
            <div className="CardFooter aboutCard padAbout2">
              <h6>Часы работы</h6>
              <ul className="spisokFooter">
                <li>
                  <p>Понедельник - Суббота</p>
                  <span>12.00 - 14.45</span>
                </li>
                <li>
                  <p>Воскресенье - Четверг</p>
                  <span>17.00 - 00.00</span>
                </li>
                <li>
                  <p>Пятница - Суббота</p>
                  <span>17.00 - 00.00</span>
                </li>
              </ul>
            </div>
            <div className="CardFooter aboutCard padAbout3 padAbout5">
              <h6>Быстрый Переход</h6>
              <ul className="spisokFooter">
                <li>
                  <i>
                    <a href="#">Главная</a>
                  </i>
                </li>
                <li>
                  <i>
                    <a href="#">Напитки</a>
                  </i>
                </li>
                <li>
                  <i>
                    <a href="#">Эспрессо</a>
                  </i>
                </li>
                <li>
                  <i>
                    <a href="#">Больше</a>
                  </i>
                </li>
                <li>
                  <i>
                    <a href="#">Наш Замечательный Блог</a>
                  </i>
                </li>
              </ul>
            </div>
            <div className="CardFooter aboutCard padAbout3">
              <h6>Связаться с нами</h6>
              <ul className="spisokFooter">
                <li>
                  <p>Адрес:</p>
                  <span>121 Московский район, 7, Санкт-Петербург</span>
                </li>
                <li>
                  <p>Email:</p>
                  <span>info@kachatsa.ru</span>
                </li>
                <li>
                  <p>Телефон:</p>
                  <span>+799921245234</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="BottomCopiright">
        <div className="margCopiraight">
          <p>Copyright 2024 GymProject Все права защищены</p>
        </div>
      </div>
    </section>
  );
}
