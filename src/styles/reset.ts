import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.app.dark};
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
  }

  body {
    background: ${({ theme }) => theme.colors.app.background};
  }
    
  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  .srOnly {
    position: absolute;
    width: 0.1rem;
    height: 0.1rem;
    margin: -0.1rem;
    border-width: 0;
    overflow: hidden;
    color: transparent;    
    clip: rect(0, 0, 0, 0);
  }

  .inputError {
    color: red;
    display: block;
    position: absolute;
    font-size: 1.0rem;
    margin-top: .4rem;
    right: 0;
  }

  .queryError {
    color: ${({ theme }) => theme.colors.app.danger};
    text-align: center;
    margin-top: 1.6rem;
  }

  .backPageButton {
    font-size: 1.6rem;
    font-weight: 500;
    margin-top: 2.4rem;

    :hover {
      text-decoration: underline;
    }
  }

  .spinner {
    animation: spinnerRotate 1s linear infinite;
    font-size: 4.2rem;
    display: block;
    margin: 50% auto;
    color: lightgray;
  }

  .messageEmptyList {
    width: 100%;
    margin: 50% auto 50%;
    font-weight: 700;
    font-size: 2.0rem;
    color: lightgray;
    display: grid;
    place-content: center;
  }

  @keyframes spinnerRotate {
    to {
        transform: rotate(360deg);
    }
  }

  @media (min-width: 640px) {
    .inputError {
      font-size: 1.2rem;
    }

    .spinner {
      margin: 20% auto 25%;
    }
    
    .messageEmptyList {
      margin: 20% auto 25%;
    }
  }
`;
