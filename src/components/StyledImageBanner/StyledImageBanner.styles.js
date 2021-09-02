import styled from "styled-components";
import Container from "../Container";

// ---

export const StyledImageBanner = styled.section`
  --gap: calc(var(--gutter) * 2);

  position: relative;
  padding: calc(var(--gap) * 2) 0;
`;

export const Inner = styled(Container)`
  display: flex;
  position: relative;
  z-index: 10;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 32rem;
`;

export const DescriptiveCopy = styled.div`
  max-width: 48rem;
  margin-top: calc(var(--gap) * 2);
  color: var(--white);
  font-size: 2rem;
  line-height: 3.2rem;
  text-align: center;
`;

export const ScrollMore = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: var(--gap);
  padding: var(--gutter) var(--gutter) 0;
  border: 0;
  background: transparent;
  color: var(--white);
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 0.05ch;
  line-height: 3.2rem;
  cursor: pointer;

  svg {
    width: 2.4rem;
    height: 2.4rem;
    margin-top: 0.4rem;
    transition: 250ms ease transform;
    color: var(--red);
  }

  &:hover svg {
    transform: translateY(0.4rem);
  }
`;

export const BG = styled.div`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  img {
    position: relative;
    z-index: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Skrim = styled.div`
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, var(--black) 100%);
`;
