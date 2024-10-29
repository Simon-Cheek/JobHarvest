import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */

const Separator = ({ size = "md", vertical = false, ...props }) => {
  let sepSize = "12px";

  switch (size) {
    case "xs":
      sepSize = "4px";
      break;
    case "sm":
      sepSize = "8px";
      break;
    case "lg":
      sepSize = "16px";
      break;
    case "xl":
      sepSize = "20px";
  }

  const separatorCss = css`
    ${vertical ? "width" : "height"}: ${sepSize};
  `;
  return <div css={separatorCss} {...props} />;
};

export default Separator;
