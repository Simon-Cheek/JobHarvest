import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import logo from "../../public/pumpkin.svg";
import { colors } from "../../colorConfig";

// Styles
const headerCss = css`
  background-color: ${colors.white};
  padding: 10px 20px;
  box-shadow: 1px 1px 4px ${colors.black}3f;
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
`;

const logoCss = css`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const navLinksCss = css`
  display: flex;
  column-gap: 16px;
  row-gap: 8px;
  font-weight: 500;
`;

const linkCss = css`
  font-size: 14px;
  color: ${colors.black};
  display: inline-block;
  position: relative;
  transition: color, transform 0.25s;
  &:hover {
    color: #585858;
    transform: scale(1.1);
  }
`;

const brandCss = css`
  color: #2f2f2f;
  font-weight: 600;
`;

const toggleCss = css`
  border: 1.6px solid ${colors.black}55;
  &:focus {
    box-shadow: 2px 1px 4px #2f462f22;
    border: 2px solid ${colors.black}88;
  }
`;

const slashCss = css`
  @media (min-width: 577px) {
    &::after {
      color: ${colors.black};
      content: "/";
      position: absolute;
      font-weight: 100;
      transform: scale(1.8) translateX(150%);
    }
  }
`;

function Header() {
  return (
    <Navbar expand="sm" css={headerCss}>
      <Navbar.Brand href="/" css={logoCss}>
        <img src={logo} alt="Job Harvest Logo - Pumpkin" width="48" />
        <span css={brandCss}>
          job<span style={{ color: "#057C21" }}>Harvest</span>
        </span>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" css={toggleCss} />

      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="mt-2 mt-sm-0" css={navLinksCss}>
          <Nav.Link href="/resume">
            <div css={slashCss}>
              {/* After Slash effect should not grow upon hover */}
              <span css={linkCss}>Resume</span>
            </div>
          </Nav.Link>
          <Nav.Link href="/interview">
            <div css={slashCss}>
              <span css={linkCss}>Interview</span>
            </div>
          </Nav.Link>
          <Nav.Link href="/careers">
            <span css={linkCss}>Careers</span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
