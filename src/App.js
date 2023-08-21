import NavBar from "./components/NavBar";
import About from "./components/About";
import Contact from "./components/Contact";
import TechnicalSkills from "./components/TechnicalSkills";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import SocialBar from "./components/SocialBar";
import Quotes from "./components/Quotes";


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Portfolio />
    
      
      <TechnicalSkills />
      <About />
      
      <Contact />
      <SocialBar />
      <Quotes />
    </div>
  );
}

export default App;
