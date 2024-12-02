import React from "react";
import Slider from "./components/Slider/Slider";
import slidesData from "./components/data/slides.json";

const App: React.FC = () => {
  return (
    <div>
      <h1>Slider Example</h1>
      <Slider
        slides={slidesData}
        loop={true}
        navs={true}
        pags={true}
        auto={true}
        stopMouseHover={true}
        delay={3}
      />
    </div>
  );
};

export default App;
