import styled from "styled-components";

export const TestimonialCard = styled.article`
  text-align: left;
  min-height: 320px;
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  padding: 3.2rem 4.8rem;
  border-radius: 0.8rem;
  overflow: hidden;
  box-shadow: var(--drop);
  height: 100%;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.copy};

  @media (min-width: 1250px) {
    padding: 3.2rem;
  }

  p {
    margin: 0;
    padding: 0;
    font-family: var(--simplonNorm);
    font-size: clamp(1.4rem, 3vw, 1.6rem);
    line-height: clamp(2rem, 4vw, 2.4rem);
  }
`;

export const TestimonialCardAuthor = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.6rem;

  svg {
    margin-right: 1.6rem;
  }

  svg path {
    fill: ${({ theme }) => theme.bolt};
  }

  strong {
    display: flex;
    flex-direction: column;
  }
`;
