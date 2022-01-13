import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import Link from "next/link";
import Head from "next/head";
import { gsap } from "gsap";
import { Squeeze as Hamburger } from "hamburger-react";
import Image from "../../Elements/Image";

import * as S from "./Header.styles";
import useAppHeight from "../../../hooks/useAppHeight";
import Logo from "../../../images/Logo";

// ---

const Header = ({ menuItems }) => {
  useAppHeight();

  //

  const router = useRouter();

  //

  const [activeMenu, setActiveMenu] = useState(null);
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [hoverImage, setHoverImage] = useState(null);

  //

  const overlayWrapperRef = useRef(null);
  const overlayPath = useRef(null);
  const wrapperRef = useRef(null);
  const headerRef = useRef(null);
  const menuTl = gsap.timeline();

  //

  function handleMenuBlur() {
    setActiveMenu(null);

    menuTl
      .to(overlayWrapperRef.current.children[0], {
        opacity: 0,
      })
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
      .set(wrapperRef.current, {
        y: "-101%",
        onComplete: () => setOverlayOpen(false),
      });
  }

  //

  function handleMenuFocus(e) {
    if (e?.target?.checked || e === "burger") {
      if (overlayOpen) return;

      menuTl
        .set(wrapperRef.current, { y: 0 })
        .set(overlayPath.current, {
          attr: { d: "M 0 100 V 100 Q 50 100 100 100 V 100 z" },
        })
        .to(overlayPath.current, {
          duration: 0.4,
          ease: "power4.in",
          attr: { d: "M 0 100 V 50 Q 50 0 100 50 V 100 z" },
          onComplete: () => setOverlayOpen(true),
        })
        .to(overlayPath.current, {
          duration: 0.3,
          ease: "power2",
          attr: { d: "M 0 100 V 0 Q 50 0 100 0 V 100 z" },
        })
        .to(overlayWrapperRef.current.children[0], {
          opacity: 0.5,
        });
    } else {
      handleMenuBlur();
    }
  }

  //

  function handleBurgerToggle() {
    if (!overlayOpen) {
      handleMenuFocus("burger");
      setActiveMenu("weAre");
      headerRef.current.querySelector('input[name="menuItem"]').checked = true;
    } else {
      handleMenuBlur();
    }
  }

  //

  useEffect(() => {
    const allMenuItems = headerRef.current.querySelectorAll(
      'input[name="menuItem"]'
    );
    let radio;

    allMenuItems.forEach((item) => {
      item.addEventListener("click", () => {
        const menuItem = item;

        setActiveMenu(item.id);

        if (radio === menuItem) {
          menuItem.checked = false;
          radio = null;
        } else {
          menuItem.checked = true;
          radio = menuItem;
        }
      });
    });
  }, []);

  //

  useEffect(() => {
    setActiveMenu(null);
    setHoverImage(null);
    setOverlayOpen(false);

    const target = headerRef.current.querySelector(".hoverImage");
    target.style.opacity = 0;
  }, [router.query.slug]);

  //

  const MenuItem = ({ title, link, image, index }) => {
    function handleImageMove(e) {
      const target = headerRef.current.querySelector(".hoverImage");
      target.style.opacity = 1;
      target.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    }

    function handleImageOut() {
      const target = headerRef.current.querySelector(".hoverImage");
      target.style.opacity = 0;
    }

    return (
      <li>
        <Link href={link === "homepage" ? "/" : `/${link}`}>
          <a
            onMouseMove={(e) => handleImageMove(e)}
            onFocus={(e) => handleImageMove(e)}
            onMouseOver={() => setHoverImage(image)}
            onMouseOut={() => handleImageOut()}
            onBlur={() => handleImageOut()}
            onClick={() => handleMenuBlur()}
            onKeyPress={() => handleMenuBlur()}
            role="link"
            tabIndex={index + 1}
          >
            <span>0{index + 1}</span>
            <div>{title}</div>
          </a>
        </Link>
      </li>
    );
  };

  MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    image: PropTypes.shape({
      _ref: PropTypes.string,
    }),
  };

  MenuItem.defaultProps = {
    image: null,
  };

  //

  return (
    <>
      <Head>
        <style>
          {`
          body {
            overflow: ${overlayOpen ? "hidden" : "auto"};
          }
        `}
        </style>
      </Head>

      <S.Header
        ref={headerRef}
        style={{
          height: overlayOpen ? "var(--app-height)" : "unset",
          overflow: overlayOpen ? "auto" : "hidden",
        }}
      >
        <S.HoverImage
          className="hoverImage"
          style={{ opacity: overlayOpen ? 1 : 0 }}
        >
          {hoverImage && <Image image={hoverImage} />}
        </S.HoverImage>

        <S.HeaderContainer
          style={{ overflow: overlayOpen ? "auto" : "hidden" }}
        >
          <div className="menuItems">
            <div className="logo-and-burger">
              <Link href="/">
                <a
                  className="logo"
                  onClick={() => (overlayOpen ? handleMenuBlur() : null)}
                  onKeyPress={() => (overlayOpen ? handleMenuBlur() : null)}
                  role="link"
                  tabIndex={0}
                >
                  <Logo />
                </a>
              </Link>

              <Hamburger
                id="weAre"
                onToggle={() => handleBurgerToggle()}
                toggled={overlayOpen}
              />
            </div>

            <nav
              role="navigation"
              className={overlayOpen ? "menuOpen" : "menuClosed"}
            >
              <form>
                <ul>
                  <li>
                    <label htmlFor="weAre">
                      <input
                        type="radio"
                        id="weAre"
                        name="menuItem"
                        onClick={(e) => handleMenuFocus(e)}
                      />
                      <div className="menuItem">We Are</div>
                      <S.MenuContent
                        className={activeMenu === "weAre" ? "show" : "hide"}
                      >
                        <ol>
                          {menuItems?.weAre?.map((item, index) => (
                            <MenuItem
                              key={item._key}
                              title={item.title}
                              link={item.slug}
                              image={item.hoverImage}
                              index={index}
                            />
                          ))}
                        </ol>
                      </S.MenuContent>
                    </label>
                  </li>
                  <li className="divider" />
                  <li>
                    <label htmlFor="what">
                      <input
                        type="radio"
                        id="what"
                        name="menuItem"
                        onClick={(e) => handleMenuFocus(e)}
                      />
                      <div className="menuItem">What</div>
                      <S.MenuContent
                        className={activeMenu === "what" ? "show" : "hide"}
                      >
                        <ol>
                          {menuItems?.what?.map((item, index) => (
                            <MenuItem
                              key={item._key}
                              title={item.title}
                              link={item.slug}
                              image={item.hoverImage}
                              index={index}
                            />
                          ))}
                        </ol>
                      </S.MenuContent>
                    </label>
                  </li>
                  <li className="divider" />
                  <li>
                    <label htmlFor="weDo">
                      <input
                        type="radio"
                        id="weDo"
                        name="menuItem"
                        onClick={(e) => handleMenuFocus(e)}
                      />
                      <div className="menuItem">We Do</div>
                      <S.MenuContent
                        className={activeMenu === "weDo" ? "show" : "hide"}
                      >
                        <ol>
                          {menuItems?.weDo?.map((item, index) => (
                            <MenuItem
                              key={item._key}
                              title={item.title}
                              link={item.slug}
                              image={item.hoverImage}
                              index={index}
                            />
                          ))}
                        </ol>
                      </S.MenuContent>
                    </label>
                  </li>
                </ul>
              </form>
            </nav>
          </div>
        </S.HeaderContainer>

        <S.Overlay ref={overlayWrapperRef}>
          <S.Noise />
          <svg
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
          </svg>
        </S.Overlay>
      </S.Header>
    </>
  );
};

Header.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  menuItems: PropTypes.object.isRequired,
};

export default Header;
