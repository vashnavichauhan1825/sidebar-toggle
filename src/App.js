import { Fragment } from "react";
import styled, { createGlobalStyle } from "styled-components";
import AsideToggle from "./AsideToggle";
import bgImg from "./assests/bgImg.jpg";

const HomeWrapper = styled.div`
  margin: 0;
  width: 100vw;
  height: 100vh;
  background: url(${bgImg});
`;
// The Styled Components library is all about styling individual components.
//  So how can you apply styles globally to an application?
// use  how you can achieve this with the createGlobalStyle function.
const GlobalStyle = createGlobalStyle`
body{
  font-family: 'Rubik', sans-serif;;
  margin:0;
}
@font-face {
  font-family: 'Rubik', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Pacifico&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300&display=swap');
}
`;

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <HomeWrapper>
        <AsideToggle /> {/*this is toggle component */}
      </HomeWrapper>
    </Fragment>
  );
}

export default App;
