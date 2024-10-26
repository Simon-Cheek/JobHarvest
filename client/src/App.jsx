import { css } from "@emotion/react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
/** @jsxImportSource @emotion/react */

function App() {
  return (
    <>
      <Header />
      <p
        css={css`
          font-size: 48px;
        `}
      >
        This is JobHarvest
      </p>
      <Footer />
    </>
  );
}

export default App;
