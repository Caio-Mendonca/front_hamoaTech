import styled from "styled-components";
import banner from "../../../../public/backgroundLines.svg"

export const BoxElement = styled.div`
    padding: 0px;
    top: 0;
    display: flex;
    width: 100%;
    height: 900px;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background: url(${banner}) no-repeat center center;
`
export const BoxItemStart = styled.div`
    width: 60%;
    margin: 5px;
    margin-right: -80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding:50px;
    padding-left: 15em;
`
export const BoxItemEnd = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
        margin-bottom: -50px;
    }
`
