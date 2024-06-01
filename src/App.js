import "./App.css";
import MainMenu from "./components/menuBlock/menu";
import ElemCoffeName from "./components/elemNameCoffe/elemNameCof";
import IcnsBelow from "./components/iconMenuBelow/iconMenuBelow";
import GoodsCards from "./components/goodsBlock/goodsCards";
import Testimonials from "./components/TESTIMONIALS/testimonials";
import SubscriveModule from "./components/subscribe/sub";
import CoffeVarieties from "./components/coffee varieties/varieties";
import OurTeam from "./components/ourTeam/ourTeam";
import FooterCoffe from "./components/footer/footerCoffe";

export default function App() {
  return (
    <div className="App">
      <MainMenu />
      <IcnsBelow />
      <GoodsCards />
      <SubscriveModule />
      <CoffeVarieties />
      <OurTeam />
      <ElemCoffeName />
      <Testimonials />
      <FooterCoffe />
    </div>
  );
}
