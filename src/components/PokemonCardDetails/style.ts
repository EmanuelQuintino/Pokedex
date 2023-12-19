import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.light};
  padding: 2.4rem;
  border-radius: 0.8rem;
  box-shadow: 1px 1px 2px 1px #0002;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12rem;
  margin-left: -36px;
  width: 100%;
  margin: auto;

  .pokemonImage {
    width: 32rem;
    border-radius: 100%;
    background: #1111;
  }

  .pokemonImage img {
    filter: drop-shadow(1px 1px 1px #000b);
    width: 100%;
  }

  strong {
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

  .boxStatusBase {
    margin-top: 1.6rem;
  }

  .statusBase {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .statusName {
    font-size: 1.6rem;
    width: 13rem;
    margin-left: auto;
  }

  .statusValue {
    font-size: 1.6rem;
    width: 4.2rem;
    text-align: right;
  }

  .boxTypes {
    display: flex;
    gap: 0.8rem;
    margin-top: 1.6rem;
  }
`;
