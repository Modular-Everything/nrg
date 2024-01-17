import styled from "styled-components";

export const TestimonialCard = styled.article`
  text-align: center;
  min-height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 3.2rem;
  border-radius: 0.8rem;
  overflow: hidden;
  box-shadow: var(--drop);
  height: 100%;

  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.copy};

  p {
    margin: 0;
    padding: 0;
    font-family: var(--grotesque);
    font-size: 2.2rem;
    line-height: 2.4rem;
    text-transform: uppercase;
  }
`;
