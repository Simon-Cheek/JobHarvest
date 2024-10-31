import { css } from "@emotion/react";
import { colors } from "../../../colorConfig";
/** @jsxImportSource @emotion/react */

import logo from "../../../Assets/hero.jpeg";
import { H1, H3 } from "../../Components/BaseUI/Headers";
import PaddingBox from "../../Components/BaseUI/PaddingBox";
import Separator from "../../Components/BaseUI/Separator";
import Paragraph from "../../Components/BaseUI/Paragraph";
import Button from "../../Components/BaseUI/Button";

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
      <H1 bold>
        <span css={aiCss}>AI</span> Powered
      </H1>
      <H3 bold>Career Growth</H3>
      <Separator size="xl" />
      <Paragraph weight="normal" css={pCss}>
        Experience the power of Gemini as a career preparation tool. Practice
        interviews, edit your resume, and more!
      </Paragraph>
      <Separator size="xl" />
      <Button to="/careers">Explore Careers</Button>
    </div>
  );
}

function HeroVisual() {
  const visualCss = css`
    width: 400px;
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
    min-height: 600px;
    background-color: ${colors.white};
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
  `;

  const geminiCss = css`
    position: absolute;
    bottom: 4px;
    right: 4px;
  `;

  return (
    <PaddingBox size="lg" css={heroCss}>
      <HeroText />
      <HeroVisual />
      <Paragraph size="sm" italic css={geminiCss}>
        Powered by Gemini
      </Paragraph>
    </PaddingBox>
  );
}

export default HomeHero;
