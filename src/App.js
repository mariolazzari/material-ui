import React from "react";
import "./App.css";
import { CssBaseline } from "@material-ui/core";

//import { ThemeProvider } from "@material-ui/core/styles";
//import theme from "./theme";

import UI from "./components/UI/UI";

//import Intro from "./components/Intro";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      {/* 
      <ThemeProvider theme={theme}>
        <Intro />
      </ThemeProvider>
      
      */}
      <UI />
    </div>
  );
}

export default App;
