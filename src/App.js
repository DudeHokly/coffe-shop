import "./App.css";
import MainMenu from "./components/menuBlock/menu";
import IcnsBelow from "./components/iconMenuBelow/iconMenuBelow";
import GoodsCards from "./components/goodsBlock/goodsCards";
import Testimonials from "./components/TESTIMONIALS/testimonials";
import SubscriveModule from "./components/subscribe/sub";
import CoffeVarieties from "./components/coffee varieties/varieties";
import FooterCoffe from "./components/footer/footerCoffe";

export default function App() {
  return (
    <div className="App">
      <MainMenu />
      <IcnsBelow />
      <GoodsCards />
      <Testimonials />
      <SubscriveModule />
      <CoffeVarieties />
      <FooterCoffe />
    </div>
  );
}
