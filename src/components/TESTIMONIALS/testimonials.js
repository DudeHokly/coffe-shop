import "./testimonials.css";
import Flickity from "react-flickity-component";
import "../menuBlock/flickity_css.css";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import dude_1 from "../../imges/dude1.jpg";
import dude_2 from "../../imges/dude2.jpg";
import dude_3 from "../../imges/dude3.png";
import dude_4 from "../../imges/dude4.jpg";

const flickityOptions = {
  initialIndex: 2,
};

const testimonialsSlider = {
  id: [1, 2, 3, 4],
  title: ["Бобер", "Кваша", "Блинчик", "Вафла"],
  desc: [
    "Так много хотелось сказать но так много не сказано",
    "Я люблю кофе, но кофе не любит меня",
    "Что я тут забыл",
    "Я ВАФЛА",
  ],
  images: [dude_1, dude_2, dude_3, dude_4],
};

export default function Testimonials() {
  return (
    <section className="testimonials">
      <h1 className="goodsText1">ОТЗЫВЫ</h1>
      <div className="elemLine limit">
        <div className="line"></div>
        <div className="line"></div>
        <EmojiFoodBeverageIcon style={{ fontSize: 32 }} />
      </div>
      <p className="testimonialsText"></p>
      <Flickity
        className="slider"
        elementType="div"
        disableImagesLoaded={false}
        options={flickityOptions}
        reloadOnUpdate
        static
      >
        {testimonialsSlider["id"].map((index) => {
          return (
            <div key={index} className="elemTestimonials">
              <>
                <h2>{testimonialsSlider["title"][index - 1]}</h2>
                <div
                  style={{
                    backgroundImage: `url(${
                      testimonialsSlider["images"][index - 1]
                    })`,
                    width: "100%",
                    height: 500,
                    backgroundSize: "cover",
                  }}
                ></div>
              </>
            </div>
          );
        })}
      </Flickity>
    </section>
  );
}
