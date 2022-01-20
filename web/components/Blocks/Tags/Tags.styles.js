import styled from "styled-components";
import ContainerCore from "../../Core/Container";

export const Container = styled(ContainerCore)`
  display: flex;
  justify-content: flex-end;
`;

export const Tags = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    font-size: 1.8rem;
    border-radius: 0.6rem;
    padding: 1.2rem var(--gutter) 0.8rem var(--gutter);
    margin-bottom: 0.8rem;
    align-self: flex-end;
    background-color: var(--${({ tagColor }) => tagColor});
    color: var(
      --${({ tagColor }) => (tagColor === "white" ? "black" : "white")}
    );

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;
