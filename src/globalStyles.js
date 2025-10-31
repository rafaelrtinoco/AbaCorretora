import { createGlobalStyle } from 'styled-components';
import '@fontsource/inter'; 
import '@fontsource/roboto'; 

const GlobalStyles = createGlobalStyle`
  body {
    /* color: #001f3d; */
    font-family: ${({ theme }) => theme.fonts.primary};
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
    font-family: inherit;
  }
`;

export default GlobalStyles;