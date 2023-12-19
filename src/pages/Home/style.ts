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

  .paginationComponent {
    width: 32rem;
    margin: 3.2rem auto 0;
    padding: 0.6rem 1.2rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      background: ${({ theme }) => theme.colors.danger};
      color: ${({ theme }) => theme.colors.light};
      font-weight: 700;
      padding: 0.6rem 1.2rem;
      border-radius: 0.8rem;
      box-shadow: 1px 1px 2px 0px #0008;
      text-shadow: 1px 1px 2px #0004;

      &:not(:disabled):hover {
        filter: brightness(1.05);
      }

      &:disabled {
        background: lightgray;
      }
    }
  }
`;
