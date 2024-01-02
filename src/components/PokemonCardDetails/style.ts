import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.light};
  padding: 2.4rem;
  border-radius: 0.8rem;
  box-shadow: 1px 1px 2px 1px #0002;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;

  .pokemonImage {
    width: 16rem;
    border-radius: 100%;
    background: #ddd8;
    box-shadow: 1px 1px 2px 1px #0002;
    margin-top: 1.6rem;
  }

  .pokemonImage img {
    filter: drop-shadow(1px 1px 1px #000b);
    width: 100%;
  }

  .boxStatus {
    text-align: center;
    margin-top: 2.4rem;
  }

  strong {
    font-size: 1.8rem;
  }

  .sizePokemon {
    margin-top: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.4rem;

    span {
      font-size: 1.4rem;
      color: gray;
    }
  }

  .boxTypes {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    margin-top: 1.4rem;
  }

  .boxStats {
    margin-top: 2.4rem;
  }

  .stats {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .statsName {
    font-size: 1.2rem;
    width: 10rem;
    margin-left: auto;
  }

  progress {
    height: 0.4rem;

    &::-webkit-progress-value {
      background: ${({ theme }) => theme.colors.primary};
      border-radius: 8px;
    }

    &::-moz-progress-value {
      background: ${({ theme }) => theme.colors.primary};
      border-radius: 8px;
    }

    &::-webkit-progress-bar {
      background: lightgray;
      border-radius: 8px;
    }

    &::-moz-progress-bar {
      background: lightgray;
      border-radius: 8px;
    }
  }

  .statsValue {
    font-size: 1.2rem;
    width: 2.4rem;
    text-align: right;
  }

  @media (min-width: 786px) {
    flex-direction: row;

    .pokemonImage {
      width: 28rem;
      margin-top: 2.4rem;
    }

    .pokemonImage img {
      filter: drop-shadow(1px 1px 1px #000b);
      width: 100%;
    }

    .boxStatus {
      text-align: left;
    }

    strong {
      font-size: 3.2rem;
    }

    .sizePokemon {
      span {
        font-size: 1.6rem;
      }
    }

    .boxTypes {
      justify-content: start;
      gap: 1.6rem;
      margin-top: 2.4rem;
    }

    .stats {
      margin-top: 0.2rem;
    }

    .statsName {
      font-size: 1.6rem;
      width: 12rem;
    }

    progress {
      height: 0.8rem;
    }

    .statsValue {
      font-size: 1.6rem;
      width: 3.2rem;
    }
  }
`;
