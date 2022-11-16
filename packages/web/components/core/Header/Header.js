import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { Fragment, useRef, useEffect } from "react";

import { Logo } from "../../icons/Logo";
import { Container } from "../Container";
import * as S from "./Header.styles";

function handleMenuOpen(e, blackBarRef) {
  const target = e.target.parentNode.querySelector("input");
  const wrapOuter = target.parentNode.parentNode.parentNode;

  if (target.checked) {
    target.checked = false;
    target.removeAttribute("checked");
    wrapOuter.classList.add("open");
    blackBarRef.current.classList.remove("closed");
  } else {
    target.checked = true;
    wrapOuter.classList.add("open");
    const subMenuHeight =
      target.parentNode.querySelector(".nav__wrap--inner").clientHeight;
    blackBarRef.current.classList.remove("closed");
    blackBarRef.current.style.height = `calc(${subMenuHeight}px + (2.4rem) * 2)`;
  }
}

function closeMenu(blackBarRef) {
  const { current: blackBar } = blackBarRef;
  const menuForm = document.querySelector("header form");

  if (!blackBar.classList.contains("closed")) {
    blackBar.classList.add("closed");
    blackBar.removeAttribute("style");
    menuForm.reset();
  }
}

export function Header({ data }) {
  const blackBarRef = useRef(null);
  const formRef = useRef(null);
  const wrapperRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const form = formRef.current;
    const blackBar = blackBarRef.current;

    form.reset();
    blackBar.classList.remove("open");
    blackBar.classList.add("closed");
  }, [router]);

  useEffect(() => {
    const wrapper = document.querySelector(".wrapper");
    wrapper.addEventListener("mouseover", () => {
      closeMenu(blackBarRef);
    });
    wrapper.addEventListener("touchstart", () => {
      closeMenu(blackBarRef);
    });
  }, []);

  return (
    <S.Header>
      <Container>
        <Link href="/">
          <a className="logo">
            <Logo />
          </a>
        </Link>

        <S.Nav role="navigation">
          <form ref={formRef}>
            <ul className="nav__wrap--outer" ref={wrapperRef}>
              {data?.navigation.map((topLevel, index) => {
                const loopLength = data?.navigation.length - 1;

                return (
                  <Fragment key={topLevel._key}>
                    <li className="nav__item--outer">
                      <label>
                        <input
                          type="radio"
                          name="nav"
                          aria-label="Open Menu"
                          data-id={topLevel._key}
                        />
                        <span
                          className="nav__item--title"
                          role="button"
                          tabIndex={-1}
                          onMouseOver={(e) => handleMenuOpen(e, blackBarRef)}
                          onFocus={(e) => handleMenuOpen(e, blackBarRef)}
                        >
                          {topLevel.label}
                        </span>
                        <ul className="nav__wrap--inner">
                          {topLevel.children.map((children) => (
                            <li
                              key={children._key}
                              className="nav__item--inner"
                            >
                              <a href={children.target.slug.current}>
                                {children.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </label>
                    </li>

                    {index !== loopLength && <li className="divider" />}
                  </Fragment>
                );
              })}
            </ul>
          </form>
        </S.Nav>
      </Container>

      <S.BlackBar ref={blackBarRef} />
    </S.Header>
  );
}

Header.propTypes = {
  data: PropTypes.object.isRequired,
};
