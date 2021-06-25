import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #E5E5E5;
    --background-header: #FFFFFF;
    
    --text-title: #555555;
    --text-body: #555555;
    --text-search: #8E8E8E;

    --white: #FFFFFF;
    --smoke: #8E8E8E
    --dark-smoke: #555555

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
    font-family: 'PT Sans Caption', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }
`;
