import Link from "next/link";
import PropTypes from "prop-types";
import { Fragment, useRef, useState } from "react";

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

  return (
    <S.Header>
      <Container>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>

        <S.Nav role="navigation">
          <ul className="nav__wrap--outer">
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
                      <span className="nav__item--title">{topLevel.label}</span>
                      <ul className="nav__wrap--inner">
                        {topLevel.children.map((children) => (
                          <li key={children._key} className="nav__item--inner">
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
        </S.Nav>
      </Container>

      <S.BlackBar
        ref={blackBarRef}
        className={activeMenu ? "open" : "closed"}
      />
    </S.Header>
  );
}

Header.propTypes = {
  data: PropTypes.object.isRequired,
};
