import { css } from "@emotion/react";
import Paragraph from "../../Components/BaseUI/Paragraph";
import { colors } from "../../../colorConfig";
import { H1, H2, H3, H4, H5, H6 } from "../../Components/BaseUI/Headers";
import HomeHero from "./HomeHero";
import HomeCarousel from "./HomeCarousel";
/** @jsxImportSource @emotion/react */

function Home() {
  return (
    <>
      <HomeHero />
      <HomeCarousel />
    </>
  );
}

export default Home;
