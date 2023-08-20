import NavBar from "./components/NavBar";
import About from "./components/About";
import Contact from "./components/Contact";
import TechnicalSkills from "./components/TechnicalSkills";
import Home from "./components/Home";
//import Portfolio from "./components/Portfolio";
import SocialBar from "./components/SocialBar";
import Quotes from "./components/Quotes";
//import TechnicalSkills from "./components/TechnicalSkills";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <TechnicalSkills />
      <Contact />
      <SocialBar />
      <Quotes />
    </div>
  );
}

export default App;
