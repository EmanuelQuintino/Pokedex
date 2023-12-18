import styled from "styled-components";

export const Container = styled.header`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.4rem;
  box-shadow: 1px 1px 4px 2px #0006;

  img {
    filter: drop-shadow(1px 1px 1px #000b);
    width: 16rem;
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
  }

  button {
    border-radius: 0.8rem;
    padding: 0.8rem 1.6rem;
    font-weight: 500;
    background: ${({ theme }) => theme.colors.complementary};
    color: ${({ theme }) => theme.colors.light};
  }

  button:hover {
    cursor: pointer;
    filter: brightness(1.05);
  }
`;
