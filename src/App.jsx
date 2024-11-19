import "./App.css";
import About from "./components/About";
import Achievement from "./components/Achievement";
import Experiences from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Project/>
      <Experiences/>
      <Achievement/>
    </>
  );
}

export default App;
