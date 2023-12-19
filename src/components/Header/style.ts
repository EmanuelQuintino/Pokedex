import styled from "styled-components";

export const Container = styled.header`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.4rem 3.2rem;
  box-shadow: 0px 0px 4px 2px #0006;
  width: 100%;

  img {
    filter: drop-shadow(1px 1px 1px #000b);
    width: 20rem;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
  }

  input {
    border-radius: 0.8rem;
    padding: 0.8rem 1.6rem;
    box-shadow: 1px 1px 2px 0px #0008;
  }

  button {
    border-radius: 0.8rem;
    padding: 0.8rem 1.6rem;
    font-weight: 700;
    background: ${({ theme }) => theme.colors.complementary};
    color: ${({ theme }) => theme.colors.light};
    box-shadow: 1px 1px 2px 0px #0008;
  }

  button:hover {
    cursor: pointer;
    filter: brightness(1.05);
  }
`;
