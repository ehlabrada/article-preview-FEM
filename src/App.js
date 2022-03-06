import React from "react";

// Components
import Main from "./components/Main";

// Styles
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/styles/theme/globalStyle";
import Theme from "./components/styles/theme/Theme";

const App = () => {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Main />
      </ThemeProvider>
    </>
  );
};

export default App;
