import styled from "styled-components";

export const SimpleBodyCopy = styled.div`
  .container {
    @media (min-width: 640px) {
      columns: ${({ columns }) => columns};
      column-gap: 2.4rem;
    }
  }

  a {
    text-decoration: underline;
  }

  .simpleBody__bolt {
    margin: 0 0 1.6rem 0;

    svg path {
      fill: ${({ theme }) => theme.bolt};
    }
  }
`;
