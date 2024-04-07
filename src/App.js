import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Curve from "./components/Curve";
import Dum from "./components/Dum";

function App() {
  return (
    <div className="w-screen  min-h-screen relative">
      <Navbar />
      <Hero /> 
      <Curve />
    </div>
  );
}

export default App;
