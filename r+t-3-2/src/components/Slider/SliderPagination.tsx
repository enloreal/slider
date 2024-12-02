import React from "react";
import { PaginationContainer, PaginationDot, SlideCounter } from "./Slider.styled";

interface SliderPaginationProps {
  totalSlides: number;
  currentSlide: number;
  onPageChange: (index: number) => void;
}

const SliderPagination: React.FC<SliderPaginationProps> = ({
  totalSlides,
  currentSlide,
  onPageChange,
}) => {
  return (
    <div>
      <SlideCounter>{currentSlide + 1}/{totalSlides}</SlideCounter>
      <PaginationContainer>
        {Array.from({ length: totalSlides }).map((_, index) => (
          <PaginationDot
            key={index}
            active={index === currentSlide}
            onClick={() => onPageChange(index)}
          />
        ))}
      </PaginationContainer>
    </div>
  );
};

export default SliderPagination;