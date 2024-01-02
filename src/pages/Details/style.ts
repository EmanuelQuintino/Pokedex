import styled from "styled-components";

export const Container = styled.div`
  .buttonBackPage {
    font-size: 1.2rem;
    font-weight: 500;
    position: absolute;
    top: 210px;
    left: 32px;

    button:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: 786px) {
    .buttonBackPage {
      font-size: 1.6rem;
      top: 210px;
      left: 52px;
    }
  }
`;
