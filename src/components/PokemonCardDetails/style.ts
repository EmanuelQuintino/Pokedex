import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.light};
  padding: 0.8rem 2.4rem;
  border-radius: 0.8rem;
  box-shadow: 1px 1px 2px 1px #0002;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5.6rem;

  .pokemonImage {
    width: 32rem;
  }
  
  .pokemonImage img {
    filter: drop-shadow(1px 1px 1px #000b);
    width: 100%;
  }

  strong {
    display: block;
    font-size: 2.8rem;
  }

  .boxStatus {
    display: flex;
    gap: 2.4rem;
    margin-top: 0.8rem;

    span {
      color: gray;
    }
  }

  .boxBaseStatus {
    margin-top: 0.8rem;
  }

  .baseStatus {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.8rem;
  }

  .statusName {
    font-size: 2rem;
  }

  progress {
    width: 24rem;
    margin-left: auto;
    color: red;
    background: red;
  }

  .statusValue {
    font-size: 2rem;
    width: 4.2rem;
    text-align: right;
  }

  .boxTypes {
    display: flex;
    gap: 0.8rem;
    margin-top: 1.2rem;
  }
`;
