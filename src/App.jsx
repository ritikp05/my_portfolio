import React from 'react'
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";
import Contact from "./components/Contact";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Tech from "./components/Tech";
import Colaboration from "./components/Colaboration";
const App = () => {
  return (
    <>
      <div >
        <Navbar />
        <Topbar />
        <About />
        <Technologies />
        <Tech />
        <Colaboration />
        <Contact />
      </div>
    </>
  );
};

export default App;
