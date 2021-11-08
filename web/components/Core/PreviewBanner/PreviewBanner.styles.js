import styled from "styled-components";

// ---

export const PreviewBanner = styled.div`
  position: fixed;
  z-index: 2000;
  bottom: calc(var(--gutter) * 2);
  right: var(--gutter);

  a {
    color: var(--white);
    background-color: var(--red);
    padding: var(--gutter);
    text-align: center;
    font-size: 1.4rem;
    line-height: 2rem;
    text-decoration: none;
    opacity: 1;
    transition: 250ms ease opacity;

    &:hover {
      opacity: 0.5;
    }
  }
`;
