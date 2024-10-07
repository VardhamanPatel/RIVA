import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import BasicBags from "../components/BasicBags";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <div>
        <Navbar />
        <HeroSection />
        <BasicBags />
        <Footer />
      </div>
    </>
  );
}

export default Home;
