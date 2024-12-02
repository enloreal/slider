import React from "react";
import { PaginationContainer, PaginationDot } from "./Slider.styled";

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
    <PaginationContainer>
      {Array.from({ length: totalSlides }).map((_, index) => (
        <PaginationDot
          key={index}
          active={index === currentSlide}
          onClick={() => onPageChange(index)}
        >
          {index + 1}
        </PaginationDot>
      ))}
    </PaginationContainer>
  );
};

export default SliderPagination;
