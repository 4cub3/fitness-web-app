import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Benefits from "./Components/Benefits/Benefits";
import OurClasses from "./Components/OurClasses/OurClasses";
import ContsctUs from "./Components/ContstcUs/ContacttUs";
import useScreen from "./hooks/screenHeight";
import ToTop from "./Components/toTop/ToTop";
import Footer from "./Components/Footer";
const App: React.FC = () => {
  const screenHeight = useScreen(1000)
  return (
    <>
      <Navbar />
      {screenHeight && <ToTop />}
      <Home />
      <main>
        <Benefits />
        <OurClasses />
        <ContsctUs />
        <Footer />
      </main>
    </>
  );
};

export default App;
