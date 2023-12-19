import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.dark};
    border: none;
    font-family: "Montserrat", "Roboto", sans-serif;
    
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
    
  button {
    background: none;
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
    color: ${({ theme }) => theme.colors.complementary};
    display: block;
    position: absolute;
    font-size: 1.2rem;
    margin-top: 0.4rem;
  }

  .feedbackList {
    width: 100%;
    margin: 15% auto;
    font-weight: 700;
    font-size: 2.0rem;
    color: lightgray;
    display: grid;
    place-content: center;
  }
  
  .spinner {
    animation: spinnerRotate 1s linear infinite;
    font-size: 4.2rem;
    display: block;
    margin: 50% auto;
    color: lightgray;
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
