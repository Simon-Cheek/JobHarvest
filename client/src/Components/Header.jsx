import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */
import "bootstrap/dist/css/bootstrap.min.css";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import logo from "../../public/pumpkin.svg";

// Styles
const headerCss = css`
  background-color: #fafffa;
  padding: 10px 20px;
  box-shadow: 1px 1px 4px #2f2f2f3f;
`;

const logoCss = css`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const navLinksCss = css`
  display: flex;
  gap: 16px;
  font-weight: 500;
`;

const linkCss = css`
  font-size: 14px;
  color: #2f2f2f;
  display: inline-block;
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

function Header() {
  return (
    <Navbar expand="md" css={headerCss}>
      <Navbar.Brand href="#home" css={logoCss}>
        <img src={logo} alt="Job Harvest Logo - Pumpkin" width="48" />
        <span css={brandCss}>
          job<span style={{ color: "#057C21" }}>Harvest</span>
        </span>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav css={navLinksCss}>
          <Nav.Link href="#home">
            <span css={linkCss}>Resume</span>
          </Nav.Link>
          <Nav.Link href="#interview">
            <span css={linkCss}>Interview</span>
          </Nav.Link>
          <Nav.Link href="#careers">
            <span css={linkCss}>Careers</span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
