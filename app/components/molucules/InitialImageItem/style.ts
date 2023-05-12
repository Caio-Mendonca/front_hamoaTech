import styled from "styled-components";
import banner from "../../../../public/backgroundImageBuilding.png"

export const BoxElement = styled.div`
    padding: 0px;
    top: 0;
    display: flex;
    width: 100%;
    height: 900px;
    background: url(${banner}) no-repeat right center;
`
export const BoxItemStart = styled.div`
    width: 50%;
    margin: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding: 50px
`
export const BoxItemEnd = styled.div`
    width: 50%;
    margin-right: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    
    img{
        width: 500px;
        height: 500px;
    }
`
