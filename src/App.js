import "./App.css";
import ServiceCard from "./components/ServiceCard";
import Slider from "./components/Slider";
import BottomToTop from "./components/Utility/BottomToTop";
import WhoWeAre from "./components/WhoWeAre";
import Aboutus from "./components/Aboutus"
import ContactUs from "./components/ContactUs";


function App() {
  return (
    <>
      <Slider />
      <WhoWeAre />
      <ServiceCard />
      <Aboutus/>
     <div id="about" className="my-2">
     <ContactUs/>
     </div>
      <BottomToTop/>
    </>
  );
}

export default App;
