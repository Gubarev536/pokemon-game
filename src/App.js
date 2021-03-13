import HeaderBlock from "./components/HeaderBlock";
import LayoutBlock from "./components/LayoutBlock";
import FooterBlock from "./components/FooterBlock";
import Img from './images/bg1.jpg' 

// import React from "react";

const App = () => {
  return (
    <>
      <HeaderBlock
        title="Pokemon"
        descr="Game"
      />
      <LayoutBlock
        title="Page1"
        descr="game1"
        urlBg={Img}
        colorBg
      />
      <LayoutBlock
        title="Page2"
        descr="game2"
        colorBg='brown'
      />
      <LayoutBlock
        title="Page3"
        descr="game3"
        urlBg={Img}
      />
      <FooterBlock />

    </>
  );
}
export default App;