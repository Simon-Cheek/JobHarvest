import { css } from "@emotion/react";
import { colors } from "../../../colorConfig";
/** @jsxImportSource @emotion/react */

import logo from "../../../Assets/pumpkin.svg";
import { H1, H3 } from "../../Components/BaseUI/Headers";
import MarginBox from "../../Components/BaseUI/MarginBox";
import PaddingBox from "../../Components/BaseUI/PaddingBox";
import Separator from "../../Components/BaseUI/Separator";
import Paragraph from "../../Components/BaseUI/Paragraph";

function HeroText() {
  const aiCss = css`
    color: ${colors.green06};
    font-style: italic;
  `;

  const pCss = css`
    max-width: 300px;
    line-height: 20px;
  `;

  return (
    <div>
      <H1>
        <span css={aiCss}>AI</span> Powered
      </H1>
      <H3 bold>Career Growth</H3>
      <Separator size="lg" />
      <Paragraph weight="normal" css={pCss}>
        Experience the power of Gemini as a career preparation tool. Practice
        interviews, edit your resume, and more!
      </Paragraph>
    </div>
  );
}

function HeroVisual() {
  const visualCss = css`
    width: 150px;
  `;

  return (
    <img
      src={logo}
      alt="JobHarvest main visual, tree with icons"
      css={visualCss}
    />
  );
}

function HomeHero() {
  const heroCss = css`
    min-height: 500px;
    background-color: ${colors.white};
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  `;

  return (
    <PaddingBox size="lg" css={heroCss}>
      <HeroText />
      <HeroVisual />
    </PaddingBox>
  );
}

export default HomeHero;
