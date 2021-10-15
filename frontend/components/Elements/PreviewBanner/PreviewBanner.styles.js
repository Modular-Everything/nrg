import styled from "styled-components";

// ---

export const PreviewBanner = styled.div`
  display: flex;
  position: relative;
  z-index: 1500;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem 0 0.8rem;
  background-color: var(--red);
  color: var(--white);
  font-size: clamp(1.4rem, 2vw, 1.8rem);
  line-height: 2rem;
  text-align: center;

  a {
    margin-left: 0.2rem;
    color: var(--white);
    text-decoration: underline;
  }
`;
