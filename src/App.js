import "./App.css";
import ServiceCard from "./components/ServiceCard";
import Slider from "./components/Slider";
import BottomToTop from "./components/Utility/BottomToTop";
import WhoWeAre from "./components/WhoWeAre";
import Aboutus from "./components/Aboutus";
import Accordian from "./components/Accordian"


function App() {
  return (
    <>
      <Slider />
      <WhoWeAre />
      <Accordian/>
      {/* <ServiceCard /> */}
      <Aboutus/>
      <BottomToTop/>
    </>
  );
}

export default App;
