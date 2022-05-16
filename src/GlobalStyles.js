import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`body {
    font-family: 'Roboto', sans-serif;


    @media screen and (max-width: 800px){
    }
  }
  
  a {
    text-decoration: none;
    color: black;
  }
  
  * {
    box-sizing: border-box;
  }`;

export default GlobalStyles;

/*

font-family: 'Roboto', sans-serif;
Thin 100
Light 300
Regular 400
Medium 500
Bold 700

*/
