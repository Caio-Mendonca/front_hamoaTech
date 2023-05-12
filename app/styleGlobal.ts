import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;700&display=swap');
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body { 
        color: #FFFFFF;
        font-family: 'Nunito', sans-serif;
        background-color: #07080A;

    }
    ::-webkit-scrollbar {
    width: 8px; /* Largura da barra de rolagem */
    }

    ::-webkit-scrollbar-track {
        background: #07080A; /* Cor de fundo da barra de rolagem */
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: #FFF; /* Cor do indicador de rolagem */
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555; /* Cor do indicador de rolagem ao passar o mouse */
    }
`

export const BoxSubTitle = styled.div`
    width: 75%;
    font-size: 4em;
    @media (max-width: 1200px) {
        font-size: 2em;
    }
    span{
        margin-left: 5px
    }
`
export const BoxSumary = styled.h3`
    font-size: 2em;
    font-weight: 100;
`
export const ButtonStyle = styled.button`
    margin-top: 20px;
    width: 200px;
    height: 50px;
    background-color: #3549CB;
    border-radius: 20px;
    border: none;
    color: white;
    font-size: 1.2em;
    cursor: pointer;
`
export const BoxTitle = styled.h1`
    font-size: 2em;
    font-weight: bold;
`