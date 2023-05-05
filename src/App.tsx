import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Benefits from "./Components/Benefits/Benefits";
import OurClasses from './Components/OurClasses/OurClasses';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Home />
      <main>
        <Benefits />
        <OurClasses />
      </main>
    </>
  );
};

export default App;
