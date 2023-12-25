import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.light};
  padding: 2.4rem;
  border-radius: 0.8rem;
  box-shadow: 1px 1px 2px 1px #0002;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .pokemonImage {
    width: 32rem;
    border-radius: 100%;
    background: #ddd8;
    box-shadow: 1px 1px 2px 1px #0002;
  }

  .pokemonImage img {
    filter: drop-shadow(1px 1px 1px #000b);
    width: 100%;
  }

  strong {
    font-size: 2.8rem;
  }

  .sizePokemon {
    display: flex;
    gap: 2.4rem;
    margin-top: 0.8rem;

    span {
      color: gray;
    }
  }

  .boxTypes {
    display: flex;
    gap: 0.8rem;
    margin-top: 1.6rem;
  }

  .boxStats {
    margin-top: 1.6rem;
  }

  .stats {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .statsName {
    font-size: 1.6rem;
    width: 13rem;
    margin-left: auto;
  }

  progress {
    height: 1rem;

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
    font-size: 1.6rem;
    width: 4.2rem;
    text-align: right;
  }
`;
