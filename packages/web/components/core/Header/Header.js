import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { Fragment, useRef, useState, useEffect } from "react";
import Headroom from "react-headroom";

import { Logo } from "../../icons/Logo";
import { Container } from "../Container";
import * as S from "./Header.styles";

function handleMenuOpen(e, blackBarRef, { menu }) {
  const { activeMenu, setActiveMenu } = menu;
  const wrapOuter = e.target.parentNode.parentNode.parentNode;

  if (e.target.dataset.id === activeMenu) {
    setActiveMenu(null);
    wrapOuter.classList.remove("open");
    e.target.checked = false;
  } else {
    const subMenuHeight =
      e.target.parentNode.querySelector(".nav__wrap--inner").clientHeight;

    setActiveMenu(e.target.dataset.id);
    wrapOuter.classList.add("open");
    blackBarRef.current.style.height = `calc(${subMenuHeight}px + (2.4rem) * 2)`;
  }
}

export function Header({ data }) {
  const [activeMenu, setActiveMenu] = useState(null);
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

  return (
    <Headroom>
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
                            onClick={(e) =>
                              handleMenuOpen(e, blackBarRef, {
                                menu: { activeMenu, setActiveMenu },
                              })
                            }
                          />
                          <span className="nav__item--title">
                            {topLevel.label}
                          </span>
                          <ul className="nav__wrap--inner">
                            {topLevel.children.map((children) => (
                              <li
                                key={children._key}
                                className="nav__item--inner"
                              >
                                <Link href={children.target.slug.current}>
                                  <a>{children.label}</a>
                                </Link>
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

        <S.BlackBar
          ref={blackBarRef}
          className={activeMenu ? "open" : "closed"}
        />
      </S.Header>
    </Headroom>
  );
}

Header.propTypes = {
  data: PropTypes.object.isRequired,
};
