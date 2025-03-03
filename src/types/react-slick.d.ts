declare module "react-slick" {
  import React from "react";

  export interface SliderProps {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    arrows?: boolean;
    [key: string]: unknown;
  }

  const Slider: React.ComponentType<SliderProps>;
  export default Slider;
}
