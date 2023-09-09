import "./App.css";
import ServiceCard from "./components/ServiceCard";
import Slider from "./components/Slider";
import BottomToTop from "./components/Utility/BottomToTop";
import WhoWeAre from "./components/WhoWeAre";
import Aboutus from "./components/Aboutus"


function App() {
  return (
    <>
      <Slider />
      <WhoWeAre />
      <ServiceCard />
      <Aboutus/>
      <BottomToTop/>
    </>
  );
}

export default App;
