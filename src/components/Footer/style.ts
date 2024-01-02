import styled from "styled-components";

export const Container = styled.header`
  background: ${({ theme }) => theme.colors.primary};
  margin-top: 1.2rem;
  padding: 2.4rem 3.2rem;
  width: 100%;
  text-align: center;
  font-weight: 700;
  text-shadow: 1px 1px 2px #0004;

  a {
    font-size: 1.2rem;
    border-radius: 0.8rem;
    padding: 1.2rem;
    background: #eee2;
    display: block;
    color: ${({ theme }) => theme.colors.light};
    text-align: center;
  }

  @media (min-width: 786px) {
    margin-top: 2.4rem;
    padding: 2.4rem 3.2rem;

    a {
      font-size: 2.4rem;
      padding: 3.2rem;
    }
  }
`;
