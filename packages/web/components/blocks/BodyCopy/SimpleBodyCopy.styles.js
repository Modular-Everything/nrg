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
`;
