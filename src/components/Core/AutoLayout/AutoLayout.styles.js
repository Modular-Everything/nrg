import styled from "styled-components";

// ---

export const AutoLayout = styled.section`
  display: flex;
  flex-direction: column;
  gap: calc(var(--gutter) * 4);
  margin: calc(var(--gutter) * 2) 0;

  &:last-of-type {
    margin-bottom: 0;
  }
`;
