import { css } from "@emotion/react";
import { colors } from "../../../colorConfig";
/** @jsxImportSource @emotion/react */

export const H1 = ({
  color = colors.black,
  underline = false,
  italic = false,
  bold = false,
  children,
  ...props
}) => {
  const headerCss = css`
    color: ${color};
    font-size: 52px;
    text-decoration: ${underline ? "underline" : "none"};
    font-style: ${italic ? "italic" : "normal"};
    font-weight: ${bold ? "600" : "500"};
    margin: 0;
  `;

  return (
    <h1 css={headerCss} {...props}>
      {children}
    </h1>
  );
};

export const H2 = ({
  color = colors.black,
  underline = false,
  italic = false,
  bold = false,
  children,
  ...props
}) => {
  const headerCss = css`
    color: ${color};
    font-size: 40px;
    text-decoration: ${underline ? "underline" : "none"};
    font-style: ${italic ? "italic" : "normal"};
    font-weight: ${bold ? "600" : "500"};
    margin: 0;
  `;

  return (
    <h2 css={headerCss} {...props}>
      {children}
    </h2>
  );
};

export const H3 = ({
  color = colors.black,
  underline = false,
  italic = false,
  bold = false,
  children,
  ...props
}) => {
  const headerCss = css`
    color: ${color};
    font-size: 32px;
    text-decoration: ${underline ? "underline" : "none"};
    font-style: ${italic ? "italic" : "normal"};
    font-weight: ${bold ? "600" : "500"};
    margin: 0;
  `;

  return (
    <h3 css={headerCss} {...props}>
      {children}
    </h3>
  );
};

export const H4 = ({
  color = colors.black,
  underline = false,
  italic = false,
  bold = false,
  children,
  ...props
}) => {
  const headerCss = css`
    color: ${color};
    font-size: 24px;
    text-decoration: ${underline ? "underline" : "none"};
    font-style: ${italic ? "italic" : "normal"};
    font-weight: ${bold ? "600" : "500"};
    margin: 0;
  `;

  return (
    <h4 css={headerCss} {...props}>
      {children}
    </h4>
  );
};

export const H5 = ({
  color = colors.black,
  underline = false,
  italic = false,
  bold = false,
  children,
  ...props
}) => {
  const headerCss = css`
    color: ${color};
    font-size: 20px;
    text-decoration: ${underline ? "underline" : "none"};
    font-style: ${italic ? "italic" : "normal"};
    font-weight: ${bold ? "600" : "500"};
    margin: 0;
  `;

  return (
    <h5 css={headerCss} {...props}>
      {children}
    </h5>
  );
};

export const H6 = ({
  color = colors.black,
  underline = false,
  italic = false,
  bold = false,
  children,
  ...props
}) => {
  const headerCss = css`
    color: ${color};
    font-size: 16px;
    text-decoration: ${underline ? "underline" : "none"};
    font-style: ${italic ? "italic" : "normal"};
    font-weight: ${bold ? "600" : "500"};
    margin: 0;
  `;

  return (
    <h6 css={headerCss} {...props}>
      {children}
    </h6>
  );
};
