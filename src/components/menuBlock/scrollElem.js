import Flickity from "react-flickity-component";
import "./flickity_css.css";
import espresso from "../../imges/espresso.jpg";
import kapuchino from "../../imges/kapuchino.jpg";
import latte from "../../imges/latte.jpg";
import amerikano from "../../imges/americano.jpg";
import raf from "../../imges/raf.jpg";

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
    <section className="scrollElemBlock">
      <div className="justPaddingScroll">
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
                  <h2 className="scrollName">
                    {coffeeSlider.title[index - 1]}
                  </h2>
                  <h1>Кофейный Магазин</h1>
                  <h3>Наслаждайтесь Своим Кофе Весь День</h3>
                </div>
                <a className="btnShop">Купить</a>
              </div>
            );
          })}
        </Flickity>
      </div>
    </section>
  );
}
