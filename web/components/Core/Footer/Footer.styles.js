import styled from "styled-components";
import CoreContainer from "../Container";

// ---

export const Footer = styled.footer`
  padding: calc(var(--gutter) * 4) 0;
  background-color: var(--black);
  color: var(--white);
  font-size: 1.8rem;
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    font-size: 1.6rem;
    padding: calc(var(--gutter) * 6) 0;
  }

  a {
    text-decoration: none;
    color: var(--white);
    opacity: 1;
    transition: 250ms ease opacity;

    &:hover {
      opacity: 0.7;
    }
  }

  .contact-socials {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;

    @media (min-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
    }

    .contact {
      display: flex;
      flex-direction: column;
      line-height: 1.5;
    }

    .socials ul {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        margin-right: var(--gutter);
      }

      li:last-of-type {
        margin-right: 0;
      }
    }
  }

  .newsletter {
    p {
      margin-bottom: var(--gutter);
      line-height: 1.5;

      @media (min-width: 768px) {
        margin-bottom: calc(var(--gutter) * 2);
      }
    }

    .input {
      display: flex;

      input,
      button {
        border: 1px solid var(--white);
        background: transparent;
        padding: 1.2rem 0.8rem 1rem;
        color: var(--white);
        font-size: 1.8rem;
        display: flex;
        align-items: center;
        outline: none;

        @media (min-width: 768px) {
          font-size: 1.2rem;
        }

        &:focus {
          outline: 1px solid red;
        }
      }

      input {
        width: 100%;
      }

      button {
        border-left: 0;
        padding-left: var(--gutter);
        padding-right: var(--gutter);
        justify-content: center;
        cursor: pointer;
        transition: 250ms ease background, 250ms ease color;

        &:hover {
          background: var(--white);
          color: var(--black);
        }
      }
    }
  }

  .badge-copyright {
    display: flex;
    align-items: flex-end;

    @media (min-width: 768px) {
      flex-direction: column;
    }

    .badge {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      width: 100%;

      @media (min-width: 768px) {
        display: unset;
        justify-content: unset;
        align-items: unset;
        width: unset;
      }
    }

    .copyright {
      margin-top: calc(var(--gutter) * 2);
      text-align: center;
      font-size: 1.4rem;
      line-height: 1.5;

      @media (min-width: 768px) {
        font-size: 1.2rem;
      }
    }
  }
`;

export const Container = styled(CoreContainer)`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: calc(var(--gutter) * 4);
  z-index: 100;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: calc(var(--gutter) * 2);
  }
`;
