import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.light};
  padding: 2.4rem;
  border-radius: 0.8rem;
  box-shadow: 1px 1px 2px 1px #0002;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    filter: drop-shadow(1px 1px 1px #000b);
    width: 24rem;
  }

  .boxTypes {
    display: flex;
    gap: 0.8rem;
    margin-top: 1.2rem;
  }
`;
