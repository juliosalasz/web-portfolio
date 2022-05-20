import { Fragment } from "react";
import GlobalStyles from "./GlobalStyles";

import Navigation from "./routes/navigation/Navigation";
import Homepage from "./routes/homepage/Homepage";
import About from "./routes/about/About";
import WebDeveloper from "./routes/webDeveloper/webDeveloper";
import GraphicDesign from "./routes/graphicDesign/GraphicDesign";

import "./App.css";

/* <Fragment>
      <GlobalStyles />
      <Navigation />
      <Homepage />
      <About />
      <WebDeveloper />
      Web developers works component
      <GraphicDesign />
      graphic desing works component
    </Fragment> */

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Navigation />
      <Homepage />
      <About />
      <WebDeveloper />
      <GraphicDesign />
    </Fragment>
  );
}

export default App;
