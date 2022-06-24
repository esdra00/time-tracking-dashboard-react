import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --blue: hsl(246, 80%, 60%);
    --lightred-work: hsl(15, 100%, 70%);
    --softBlue-play: hsl(195, 74%, 62%);
    --lightred-study: hsl(348, 100%, 68%);
    --limeGreen-exercise: hsl(145, 58%, 55%);
    --violet-social: hsl(264, 64%, 52%);
    --softOrange-self-care: hsl(43, 84%, 65%);
    --veryDarkBlue: hsl(226, 43%, 10%);
    --darkBlue: hsl(235, 46%, 20%);
    --desaturatedBlue: hsl(235, 45%, 61%);
    --paleBlue: hsl(236, 100%, 87%);
    --fs: 18px;
    --ff-body:'Rubik', sans-serif;
    font-size: 18px;
  }

  *, *::after, *::before{
    margin: 0;
    padding: 0;
    font-family: var(--ff-body);
    box-sizing: border-box;
  }
  
  body {
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    background-color: var(--veryDarkBlue)
  }

  img{
    width:100;
    height:auto;
    display: block;
  }
`;

export default GlobalStyle;