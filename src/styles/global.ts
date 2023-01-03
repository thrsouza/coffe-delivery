import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.yellow700};
  }

  body {
    background: ${(props) => props.theme.gray100};
    color: ${(props) => props.theme.gray700};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3;
  }

  h1 {
    font-size: 3rem;
  }


  h1, h2, h3, h4, h5, h6 {
    font-family: 'Baloo 2', sans-serif;
    line-height: 1.3;
  }

  h1 {
    color: ${(props) => props.theme.gray900};
  }

  h2, h3, h4, h5, h6 {
    color: ${(props) => props.theme.gray800};
  }

  h1, h2, h3 {
    font-weight: 800;
  }
  
  h4, h5, h6 {
    font-weight: 700;
  }
`
