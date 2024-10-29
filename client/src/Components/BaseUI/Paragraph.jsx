import { css } from "@emotion/react";
import { colors } from "../../../colorConfig";
/** @jsxImportSource @emotion/react */

function Paragraph({
  size = "md",
  weight = "normal",
  italic = false,
  underline = false,
  color = colors.black,
  children,
  ...props
}) {
  let fontSize = "16px";
  let textMargin = "0";
  let fontWeight = "400";

  switch (weight) {
    case "bold":
      fontWeight = "600";
      break;
    case "semi":
      fontWeight = "500";
      break;
    case "light":
      fontWeight = "300";
      break;
    default:
      fontWeight = "400";
  }

  switch (size) {
    case "xs":
      fontSize = "12px";
      break;
    case "sm":
      fontSize = "14px";
      break;
    case "md":
      fontSize = "16px";
      break;
    case "lg":
      fontSize = "20px";
      textMargin = "4px 0";
      break;
    case "xl":
      fontSize = "24px";
      textMargin = "8px 0";
      break;
  }

  const textCss = css`
    margin: ${textMargin};
    padding: 0 4px;
    color: ${color};
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    font-style: ${italic ? "italic" : "normal"};
    text-decoration: ${underline ? "underline" : "none"};
  `;

  return (
    <p css={textCss} {...props}>
      {children}
    </p>
  );
}

export default Paragraph;
