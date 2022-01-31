import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Hughs';
    src: url('/fonts/Hughs.woff2') format('woff2'),
       url('/fonts/Hughs.woff') format('woff');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: 'SimvoniItalic';
    src: url('/fonts/SimvoniItalic-mLVOx.woff2') format('woff2');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: 'Conthrax';
    src: url('/fonts/conthrax-sb.woff2') format('woff2');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  html, body {
    height: 100%;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    transition: background-color 0.2s linear;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`

export default GlobalStyle
