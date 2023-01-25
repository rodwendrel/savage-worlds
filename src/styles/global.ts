import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle `
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Rajdhani', sans-serif;
    }

    html, body, #root {
        height: 100%;
        overflow: hidden;
        background: radial-gradient(ellipse at bottom, #192222 0%,#090a0f 100%);
    }
    
    body {
        background-color: #030303;
    }
    
    button, input {
        background-color: none;
        border: none;
        outline: none;
    }

    a {
        text-decoration: none;
        outline: none;
    }
`

export default globalStyle;