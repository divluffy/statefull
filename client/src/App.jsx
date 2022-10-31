import "./App.css";
import "./media.css";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Design from "./components/Design";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Solutions from "./components/Solutions";
import Specialized from "./components/Specialized";
import Technologies from "./components/Technologies";
import OurTeam from "./components/OurTeam";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Specialized />
      <Technologies />
      <OurTeam />
      <ContactUs />
      {/* <AboutUs /> */}
      {/* <Design /> */}
      {/* <Solutions  /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
