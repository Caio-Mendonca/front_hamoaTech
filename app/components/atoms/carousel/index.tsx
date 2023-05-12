import * as React from "react";
import { BoxButton, BoxCarousel, BoxIdex, ButtonCarousel, SCarouselSlide, SCarouselSlides, SCarouselWrapper } from "./style";

interface IProps {
  children: JSX.Element[];
}
const Carousel = ({ children }: IProps) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const activeSlide = children.map((slide, index) => (
    <SCarouselSlide active={currentSlide === index} key={index}>
      {slide}
    </SCarouselSlide>
  ));

  return (
    <>
    <BoxCarousel>
      <BoxButton>
        <ButtonCarousel
          onClick={() => {
            setCurrentSlide((currentSlide - 1 + activeSlide.length) % activeSlide.length);
          }}
        >
          {'<'}
        </ButtonCarousel>
      </BoxButton>
      <SCarouselWrapper>
        <SCarouselSlides currentSlide={currentSlide}>
          {activeSlide}
        </SCarouselSlides>
      </SCarouselWrapper>
      <BoxButton>
      <ButtonCarousel
        onClick={() => {
          setCurrentSlide((currentSlide + 1) % activeSlide.length);
        }}
      >
        {'>'}
      </ButtonCarousel>
      </BoxButton>
    </BoxCarousel>
    <BoxIdex>
      {children.map((slide, index) => (
        <button key={index} onClick={() => { setCurrentSlide(index)}}>
        {
          currentSlide === index ? 
          <div
          style={{
            width: '20px',
            height: '20px',
            background: 'linear-gradient(90deg, #79E8E7 0%, #998BE9 91.67%)',
            borderRadius: '100%'
  
          }}
          
          ></div>
          
          : null
        
        }
        </button>
      ))}
    </BoxIdex>
    </>
  );
};

export default Carousel;