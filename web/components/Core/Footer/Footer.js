import React from "react";
import Link from "next/link";
import { BsLinkedin as LiIcon, BsInstagram as InstaIcon } from "react-icons/bs";

import * as S from "./Footer.styles";
import Badge from "../../../images/icons/Badge";

// ---

const Footer = () => (
  <S.Footer>
    <S.Container>
      <div className="contact-socials">
        <div className="contact">
          <Link href="/">
            <a>madewithnrg.com</a>
          </Link>
          <a href="mailto:info@madewithnrg.com">info@madewithnrg.com</a>
        </div>

        <div className="socials">
          <ul>
            <li>
              <a href="https://instagram.com/madewithnrg">
                <InstaIcon />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/nrg-marketing-llc/">
                <LiIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="newsletter">
        <form>
          <label htmlFor="newsletter-email">
            <p>Sign up to our newsletter</p>
            <div className="input">
              <input type="email" id="newsletter-email" />
              <button type="submit">Submit</button>
            </div>
          </label>
        </form>
      </div>

      <div className="badge-copyright">
        <div className="badge">
          <Link href="/">
            <a>
              <Badge />
            </a>
          </Link>

          <div className="copyright">
            <p>&copy; NRG {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </S.Container>

    <S.Noise />
  </S.Footer>
);

export default Footer;
