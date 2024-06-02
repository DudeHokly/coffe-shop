import Flickity from "react-flickity-component";
import "./flickity_css.css";
import espresso from "../../imges/bgSliderMenu/espressoBg.png";
import kapuchino from "../../imges/bgSliderMenu/kapuchinoBg.png";
import latte from "../../imges/bgSliderMenu/latteBg.png";
import amerikano from "../../imges/bgSliderMenu/americanoBg.png";
import raf from "../../imges/bgSliderMenu/rafBg.png";

const flickityOptions = {
  initialIndex: 2,
};

const coffeeSlider = {
  id: [1, 2, 3, 4, 5],
  title: ["Эспрессо", "Капучино", "Латте", "Американо", "Раф"],
  images: [espresso, kapuchino, latte, amerikano, raf],
};

export default function ScrollElem() {
  return (
    <Flickity
      className="slider"
      elementType="div"
      disableImagesLoaded={false}
      options={flickityOptions}
      reloadOnUpdate
      static
    >
      {coffeeSlider.id.map((index) => {
        return (
          <div key={index} className="elemCoffe">
            <div
              style={{
                backgroundImage: `url(${coffeeSlider.images[index - 1]})`,
                width: "100%",
                height: 700,
                backgroundSize: "cover",
              }}
              className="imgScrollElem"
            >
              <div className="textContainer">
                <h2 className="scrollName">{coffeeSlider.title[index - 1]}</h2>
                <h1 className="titleScrlolElemMenu">Кофейный Магазин</h1>
                <h3 className="title2ScrolElemMenu">
                  Наслаждайтесь Своим Кофе Весь День
                </h3>
                <a href="#" className="btnShop">
                  Купить
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </Flickity>
  );
}
