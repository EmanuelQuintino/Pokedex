import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  min-height: 100vh;

  .gridCards {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.4rem;
    flex-wrap: wrap;
  }

  .paginationButtons {
    width: 24rem;
    margin: 2rem auto;
    padding: 0.6rem 1.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
