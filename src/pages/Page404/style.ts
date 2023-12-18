import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.light};
  display: grid;
  place-content: center;
  height: 100vh;

  img {
    width: 56rem;
  }
`;
