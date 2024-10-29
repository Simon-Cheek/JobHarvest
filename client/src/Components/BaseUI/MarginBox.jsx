import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */

const MarginBox = ({
  size = "md",
  children,
  horizontal = false,
  vertical = false,
  ...props
}) => {
  let marginSize = "12px";

  if (vertical && horizontal)
    throw new Error("Cannot have both vertical and horizontal props");

  switch (size) {
    case "xs":
      marginSize = "4px";
      break;
    case "sm":
      marginSize = "8px";
      break;
    case "lg":
      marginSize = "16px";
      break;
    case "xl":
      marginSize = "20px";
  }

  const marginCss = css`
    margin: ${marginSize};
    ${horizontal ? `margin: 0 ${marginSize};` : ""}
    ${vertical ? `margin: ${marginSize} 0;` : ""}
  `;

  return (
    <div css={marginCss} {...props}>
      {children}
    </div>
  );
};

export default MarginBox;
