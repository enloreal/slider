import React from "react";
import { SlideData } from "./SliderProps";
import { SlideItem, SlideCaption } from "./Slider.styled";

interface SliderSlideProps {
  slide: SlideData;
}

const SliderSlide: React.FC<SliderSlideProps> = ({ slide }) => {
  return (
    <SlideItem>
      <img src={slide.img} alt={slide.text} />
      <SlideCaption>{slide.text}</SlideCaption>
    </SlideItem>
  );
};

export default SliderSlide;
