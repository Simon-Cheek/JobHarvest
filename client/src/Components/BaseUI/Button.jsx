import { css } from "@emotion/react";
import { colors } from "../../../colorConfig";
import { Link } from "react-router-dom";
/** @jsxImportSource @emotion/react */

const Button = ({
  color = colors.green06,
  hoverColor = colors.green05,
  hollow = false,
  to = "",
  children,
  ...props
}) => {
  const buttonCss = css`
    font-size: 14px;
    font-weight: 500;
    padding: 5px 15px;
    border: 2px solid ${color};
    border-radius: 12px;
    box-shadow: 1px 1px 3px ${colors.black}33;
    background-color: ${color};
    transition: background-color 0.2s ease, box-shadow 0.2s ease,
      border 0.2s ease, transform 0.2s ease;
    color: ${colors.white};
    &:hover {
      background-color: ${hoverColor};
      border: 2px solid ${hoverColor};
      box-shadow: 2px 2px 5px ${colors.black}44;
      transform: scale(1.03);
    }
    ${hollow &&
    `
      background-color: #ffffff00;
      color: ${color};
      &:hover {
        background-color: #f8fbf8;
        transform: scale(1.03);
      }
      `}
  `;

  return !to ? (
    <button css={buttonCss} {...props}>
      {children}
    </button>
  ) : (
    <Link to={to}>
      <button css={buttonCss} {...props}>
        {children}
      </button>
    </Link>
  );
};

export default Button;
