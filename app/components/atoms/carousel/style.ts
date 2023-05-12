import styled  from "styled-components";

export const SCarouselWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    margin-top: 10px;
`;
interface ICarouselSlide {
    active?: boolean;
  }

export const SCarouselSlide = styled.div<ICarouselSlide>`
    flex: 0 0 auto;
    display: ${props => (props.active ? 'flex' : 'none')};
    transition: all 0.5s ease;
    width: 100%;
`;

interface ICarouselProps {
    currentSlide: number;
  }
  
export const SCarouselSlides = styled.div<ICarouselProps>`
    display: flex;
    transition: all 0.5s ease;
    width: 100%;
    padding: 10px;
  `;
export const BoxCarousel = styled.div`
    width: 100%;
    display: flex;
    height: 450px;
`

export const ButtonCarousel = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    border: none;
`
export const BoxButton= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    margin: 5px;
    padding: 5px;
    height: 100%;
    border-radius: 100%;
    margin-top: 10px;
`
export const BoxIdex = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 100px;
      button{
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        border: none;
        height: 20px;
        margin: 0 10px;
        background-color: #fff;
        border-radius: 100%;

      }
`