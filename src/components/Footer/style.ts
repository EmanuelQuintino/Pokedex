import styled from "styled-components";

export const Container = styled.header`
  background: ${({ theme }) => theme.colors.primary};
  margin-top: 2.4rem;
  padding: 2.4rem 3.2rem;
  width: 100%;
  text-align: center;
  font-weight: 700;
  text-shadow: 1px 1px 2px #0004;

  a {
    font-size: 2.4rem;
    border-radius: 0.8rem;
    padding: 3.2rem;
    background: #eee2;
    display: block;
    color: ${({ theme }) => theme.colors.light};
    text-align: center;
  }
`;
