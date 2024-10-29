import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */

const PaddingBox = ({
  size = "md",
  horizontal = false,
  vertical = false,
  children,
  ...props
}) => {
  let paddingSize = "12px";

  if (vertical && horizontal)
    throw new Error("Cannot have both vertical and horizontal props");

  switch (size) {
    case "xs":
      paddingSize = "4px";
      break;
    case "sm":
      paddingSize = "8px";
      break;
    case "lg":
      paddingSize = "16px";
      break;
    case "xl":
      paddingSize = "20px";
  }

  const marginCss = css`
    padding: ${paddingSize};
    ${horizontal ? `padding: 0 ${paddingSize};` : ""}
    ${vertical ? `padding: ${paddingSize} 0;` : ""}
  `;

  return (
    <div css={marginCss} {...props}>
      {children}
    </div>
  );
};

export default PaddingBox;
