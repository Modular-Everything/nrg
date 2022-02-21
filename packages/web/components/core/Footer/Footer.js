import Link from "next/link";
import { BsLinkedin as LiIcon, BsInstagram as InstaIcon } from "react-icons/bs";

import { Bolt, FooterBadge } from "../../icons/BadgeBolt";
import { Container } from "../Container";
import * as S from "./Footer.styles";

export function Footer() {
  return (
    <S.Footer>
      <Container>
        {" "}
        <div className="contact-socials">
          <div className="contact">
            <h4>Connect with us</h4>
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
            <label>
              <h4>Sign up to our newsletter</h4>
              <div className="input">
                <input
                  type="email"
                  id="newsletter-email"
                  aria-label="Sign up to our newsletter"
                />
                <button type="submit">Submit</button>
              </div>
            </label>
          </form>
        </div>
        <div className="badge-copyright">
          <div className="badge">
            <Link href="/">
              <a>
                <span className="badgeWrapper">
                  <FooterBadge />
                </span>
                <span className="bolt">
                  <Bolt />
                </span>
              </a>
            </Link>

            <div className="copyright">
              <p>&copy; NRG {new Date().getFullYear()}</p>
            </div>
          </div>
        </div>
      </Container>
    </S.Footer>
  );
}
