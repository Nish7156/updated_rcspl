import "./App.css";
import ServiceCard from "./components/ServiceCard";
import Slider from "./components/Slider";
import BottomToTop from "./components/Utility/BottomToTop";
import WhoWeAre from "./components/WhoWeAre";
import Aboutus from "./components/Aboutus";
import Accordian from "./components/Accordian";
import ContactUs from "./components/ContactUs";
import Clients from "./components/Clients";

function App() {
  return (
    <>
      <Slider />
      <WhoWeAre />
      <Accordian />
      {/* <ServiceCard /> */}
      <Aboutus />
      <Clients/>
      <div className="my-2">
        <ContactUs />
      </div>
      <BottomToTop />
    </>
  );
}

export default App;
