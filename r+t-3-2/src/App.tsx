import React from "react";
import Slider from "./components/Slider/Slider";
import slidesTitle from "./components/data/slides.json";

const App: React.FC = () => {
  return (
    <div>
      <h1>Slider</h1>
      <Slider
        slides={slidesTitle}
        loop={true}
        navs={true}
        pags={true}
        auto={false}
        stopMouseHover={true}
        delay={3}
      />
    </div>
  );
};

export default App;
