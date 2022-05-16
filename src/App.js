import { Fragment } from "react";
import GlobalStyles from "./GlobalStyles";

import Navigation from "./routes/navigation/Navigation";
import Homepage from "./routes/homepage/Homepage";
import About from "./routes/about/About";

import "./App.css";

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Navigation />
      <Homepage />
      <About />
    </Fragment>
  );
}

export default App;
