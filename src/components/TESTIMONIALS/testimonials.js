import "./testimonials.css";
import Flickity from "react-flickity-component";
import "../menuBlock/flickity_css.css";
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
    "Так много хотелось сказать но так много не сказано. Ароматный напиток, который не только разбудит тебя с утра, но и подарит уютные моменты в течение дня. Кофе – это не просто жидкость, но целая философия. Он способен создавать атмосферу уюта и комфорта, окутывая тебя нежным ароматом и насыщенным вкусом.",
    "Я люблю кофе, но кофе не любит меня. Каждая чашка кофе – это неповторимое путешествие в мир удовольствия и вдохновения. Пей кофе с удовольствием, и пусть он станет твоим верным спутником в любое время дня!",
    "Это потрясающе! Есть что-то поистине особенное в простом удовольствии от покупки свежего кофе. С того момента, как вы входите в кафе, встреченный насыщенным ароматом свежемолотых зерен, и до предвкушения, когда бариста готовит ваш любимый напиток, - все это задействует все органы чувств. Взять в руки теплую чашку, почувствовать тепло, излучаемое рукавом, и сделать первый, восхитительный глоток - это идеальное начало любого дня. Наслаждайтесь каждым глотком, и пусть он сделает ваш день ярче! ☕✨😊",
    "В первой чашке действительно есть что-то волшебное. С того момента, как вы переступаете порог кафе, манящий аромат свежемолотых кофейных зерен наполняет воздух, обещая восхитительные впечатления. Когда вы делаете первый глоток, вы не просто пробуете кофе - вы отправляетесь в путешествие по вкусовым ощущениям.  Меня завут ВАФЛА и я так рад, тому что попал в удивительный мир кофе! ☕️🎉😊",
  ],
  images: [dude_1, dude_2, dude_3, dude_4],
};

export default function Testimonials() {
  return (
    <section className="testimonials-container">
      <Flickity
        className="testimonials"
        elementType="div"
        disableImagesLoaded={false}
        options={flickityOptions}
        reloadOnUpdate
        static
      >
        {testimonialsSlider.id.map((index) => (
          <div key={index} className="elemTestimonials">
            <div className="ContentTestim">
              <p className="testimonialsText">
                {testimonialsSlider.desc[index - 1]}
              </p>
              <div
                style={{
                  backgroundImage: `url(${
                    testimonialsSlider.images[index - 1]
                  })`,
                }}
                className="imgScrollElemTestim"
              ></div>
              <h2 className="scrollNameTestim">
                {testimonialsSlider.title[index - 1]}
              </h2>
            </div>
          </div>
        ))}
      </Flickity>
    </section>
  );
}
