import React, { useState, useEffect, useRef } from "react";
import { SliderProps } from "./SliderProps";
import { SliderContainer, SliderWrapper } from "./Slider.styled";
import SliderSlide from "./SliderSlide";
import SliderNavigation from "./SliderNavigation";
import SliderPagination from "./SliderPagination";

const Slider: React.FC<SliderProps> = ({
  slides,
  loop = false,
  navs = false,
  pags = false,
  auto = false,
  stopMouseHover = false,
  delay = 5,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? (loop ? 0 : prevSlide) : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? (loop ? slides.length - 1 : prevSlide) : prevSlide - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (auto && !isHovered) {
      timeoutRef.current = setTimeout(nextSlide, delay * 1000);
    }
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentSlide, auto, delay, isHovered]);

  const handleMouseEnter = () => {
    if (stopMouseHover) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (stopMouseHover) {
      setIsHovered(false);
    }
  };

  return (
    <SliderContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <SliderWrapper style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
      {slides.map((slide, index) => (
  <SliderSlide
    key={index}
    slide={slide}
    index={index} // Передаем индекс
  />
))}
      </SliderWrapper>
      {navs && <SliderNavigation onPrevClick={prevSlide} onNextClick={nextSlide} />}
      {pags && <SliderPagination totalSlides={slides.length} currentSlide={currentSlide} onPageChange={goToSlide} />}
    </SliderContainer>
  );
};

export default Slider;
