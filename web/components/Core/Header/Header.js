import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";

import * as S from "./Header.styles";
import useAppHeight from "../../../hooks/useAppHeight";
import useElementHeight from "../../../hooks/useElementHeight";
import Logo from "../../../images/Logo";

// ---

const Header = () => {
  useAppHeight();

  const nav = ["01", "02", "03", "04", "05", "06", "07", "08"];
  const navAlt = ["01", "02", "03"];

  const [activeMenu, setActiveMenu] = useState(null);
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  const menuRef = useRef(null);
  const overlayPath = useRef(null);
  const wrapperRef = useRef(null);
  const headerRef = useRef(null);
  const menuTl = gsap.timeline();

  useEffect(() => {
    const allNestedMenus = wrapperRef.current.querySelectorAll(".nestedMenu");

    if (headerRef.current) {
      setHeaderHeight(useElementHeight(headerRef.current));

      window.addEventListener("resize", () =>
        setHeaderHeight(useElementHeight(headerRef.current))
      );
    }

    if (wrapperRef.current) {
      allNestedMenus.forEach((element) => {
        gsap.set(element, { opacity: 0 });
      });
    }
  }, []);

  function handleMenuFocus(menu) {
    setActiveMenu(menu);

    if (!overlayOpen) {
      setOverlayOpen(true);
      menuTl
        .set(wrapperRef.current, { y: 0 })
        .set(overlayPath.current, {
          attr: { d: "M 0 100 V 100 Q 50 100 100 100 V 100 z" },
        })
        .to(
          overlayPath.current,
          {
            duration: 0.4,
            ease: "power4.in",
            attr: { d: "M 0 100 V 50 Q 50 0 100 50 V 100 z" },
          },
          0
        )
        .to(overlayPath.current, {
          duration: 0.3,
          ease: "power2",
          attr: { d: "M 0 100 V 0 Q 50 0 100 0 V 100 z" },
        })
        .to(menuRef.current, { duration: 0.3, ease: "linear", opacity: 1 });
    }
  }

  function handleMenuBlur() {
    setActiveMenu(null);
    setOverlayOpen(false);

    menuTl
      .to(menuRef.current, { duration: 0.3, ease: "linear", opacity: 0 })
      .set(overlayPath.current, {
        attr: { d: "M 0 0 V 100 Q 50 100 100 100 V 0 z" },
      })
      .to(overlayPath.current, {
        duration: 0.3,
        ease: "power2.in",
        attr: { d: "M 0 0 V 50 Q 50 0 100 50 V 0 z" },
      })
      .to(overlayPath.current, {
        duration: 0.4,
        ease: "power4",
        attr: { d: "M 0 0 V 0 Q 50 0 100 0 V 0 z" },
      })
      .set(wrapperRef.current, { y: "-101%" });
  }

  return (
    <>
      <S.Header
        ref={headerRef}
        style={{
          height: overlayOpen ? "var(--app-height)" : "unset",
          overflow: overlayOpen ? "auto" : "hidden",
        }}
      >
        <S.HeaderContainer>
          <div className="menuItems">
            <Link href="/">
              <a
                className="logo"
                onMouseOver={() => (activeMenu ? handleMenuBlur() : null)}
                onFocus={() => (activeMenu ? handleMenuBlur() : null)}
              >
                <Logo />
              </a>
            </Link>

            <nav role="navigation">
              <ul>
                <li>
                  <Link href="/">
                    <a
                      onMouseOver={(e) => handleMenuFocus(e, "we-are")}
                      onFocus={(e) => handleMenuFocus(e, "we-are")}
                    >
                      We Are
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a
                      onMouseOver={(e) => handleMenuFocus(e, "what")}
                      onFocus={(e) => handleMenuFocus(e, "what")}
                    >
                      What
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a
                      onMouseOver={(e) => handleMenuFocus(e, "we-do")}
                      onFocus={(e) => handleMenuFocus(e, "we-do")}
                    >
                      We Do
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </S.HeaderContainer>

        <S.MenuWrapper ref={wrapperRef}>
          <S.MenuContent
            style={{ transform: `translateY(${headerHeight}px)` }}
            ref={menuRef}
          >
            <S.MenuContentContainer>
              <div className="nestedMenu menu--01 menu--we-are">
                <ol>
                  {nav.map((index) => (
                    <li>
                      <Link href="/">
                        <a>
                          <span>{index}</span>
                          <div className="menu__content--item">
                            Values &amp; Beliefs
                          </div>
                        </a>
                      </Link>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="nestedMenu menu--02 menu--what">
                <ol>
                  {navAlt.map((index) => (
                    <li>
                      <Link href="/">
                        <a>
                          <span>{index}</span>
                          <div className="menu__content--item">
                            Something Else
                          </div>
                        </a>
                      </Link>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="nestedMenu menu--02 menu--we-do">
                <ol>
                  {navAlt.map((index) => (
                    <li>
                      <Link href="/">
                        <a>
                          <span>{index}</span>
                          <div className="menu__content--item">
                            Another Example
                          </div>
                        </a>
                      </Link>
                    </li>
                  ))}
                </ol>
              </div>
            </S.MenuContentContainer>
          </S.MenuContent>
        </S.MenuWrapper>

        <S.Overlay
          className="overlay"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            ref={overlayPath}
            className="overlay__path"
            vectorEffect="non-scaling-stroke"
            d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
          />
        </S.Overlay>
      </S.Header>
    </>
  );
};

export default Header;
