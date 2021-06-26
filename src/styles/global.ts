import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #E5E5E5;
    --background-header: #FFFFFF;
    --text-title: #555555;
    --text-body: #555555;
    --text-search: #8E8E8E;
    --white: #FFFFFF;
    --smoke: #8E8E8E;
    --dark-snow: #E5E5E5;
    --dark-smoke: #555555;
    --dark-blue: #167ABC;
    --snow: #F5F5F5;
    --light-grey: #00000033;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 83.5%;
    }
  }
  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'PT Sans', sans-serif;
    font-weight: 400;
    color: var(--text-body);
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-family: 'PT Sans Caption', sans-serif;
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }
`;
