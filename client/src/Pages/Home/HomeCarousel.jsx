import { css } from "@emotion/react";
import { colors } from "../../../colorConfig";
import PaddingBox from "../../Components/BaseUI/PaddingBox";
import { H2, H3 } from "../../Components/BaseUI/Headers";
import Separator from "../../Components/BaseUI/Separator";
/** @jsxImportSource @emotion/react */

function HomeCarousel() {
  const carouselCss = css`
    background: linear-gradient(to right, ${colors.green00}, ${colors.green01});
    min-height: 200px;
  `;

  const headerCss = css`
    text-align: center;
  `;

  const spanCss = css`
    color: ${colors.green07};
    font-style: italic;
  `;

  return (
    <PaddingBox css={carouselCss}>
      <Separator size="md" />
      <H3 css={headerCss}>
        <span css={spanCss}>Automate</span> your Career Journey
      </H3>
    </PaddingBox>
  );
}

export default HomeCarousel;
