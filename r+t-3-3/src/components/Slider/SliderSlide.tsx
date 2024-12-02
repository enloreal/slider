import React from "react";
import { SlideData } from "./SliderProps";
import { SlideItem, SlideCaption } from "./Slider.styled";

interface SliderSlideProps {
  slide: SlideData;
  index: number;
}

const SliderSlide: React.FC<SliderSlideProps> = ({ slide, index }) => {

  return (
    <SlideItem>
      <img src={slide.img} alt={slide.text} />
      <SlideCaption>{slide.text}</SlideCaption>
    </SlideItem>
  );
};

export default SliderSlide;