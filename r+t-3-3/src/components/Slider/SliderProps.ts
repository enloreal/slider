export interface SliderProps {
  slides: SlideData[];
  loop?: boolean;
  navs?: boolean;
  pags?: boolean;
  auto?: boolean;
  stopMouseHover?: boolean;
  delay?: number;
}

export interface SlideData {
  img: string;
  text: string;
}
