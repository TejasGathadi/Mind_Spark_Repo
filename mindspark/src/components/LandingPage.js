import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import PhotosVideosSlider from "./PhotosVideosSlider";
import Footer from "./Footer";
import DemoComponent from "./DemoComponent";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Features />
      <PhotosVideosSlider />
      <DemoComponent />
      <Footer />
    </>
  );
}
