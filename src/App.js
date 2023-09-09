import "./App.css";
import ServiceCard from "./components/ServiceCard";
import Slider from "./components/Slider";
import BottomToTop from "./components/Utility/BottomToTop";
import WhoWeAre from "./components/WhoWeAre";

function App() {
  return (
    <>
      <Slider />
      <WhoWeAre />
      <ServiceCard />
      <BottomToTop/>
    </>
  );
}

export default App;
