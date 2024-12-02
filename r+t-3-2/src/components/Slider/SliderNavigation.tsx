import React from "react";
import { PrevButton, NextButton } from "./Slider.styled";

interface SliderNavigationProps {
  onPrevClick: () => void;
  onNextClick: () => void;
}

const SliderNavigation: React.FC<SliderNavigationProps> = ({
  onPrevClick,
  onNextClick,
}) => {
  return (
    <>
      <PrevButton onClick={onPrevClick}>&lt;</PrevButton>
      <NextButton onClick={onNextClick}>&gt;</NextButton>
    </>
  );
};

export default SliderNavigation;
