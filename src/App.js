import "./App.css";
import MainMenu from "./components/menuBlock/menu";
import IcnsBelow from "./components/iconMenuBelow/iconMenuBelow";
import GoodsCards from "./components/goodsBlock/goodsCards";

export default function App() {
  return (
    <div className="App">
      <MainMenu />
      <IcnsBelow />
      <GoodsCards />
    </div>
  );
}
