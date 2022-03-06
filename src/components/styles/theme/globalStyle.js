import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html{
  font-size: 13px;
  font-family: 'Manrope', sans-serif;
}

body{
  /* width: 100%; */
  /* min-height: 100vh; */

  background-color: ${({ theme }) => theme.colors.grayishBlue};
}

#root{
  width: 100%;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
}

`;

export default GlobalStyle;
