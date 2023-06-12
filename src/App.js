import React from "react";
import Featured from "./components/featured/Featured";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Best from "./components/best/Best";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Best />
      <Featured />
      <Footer />
    </>
  );
}

export default App;
