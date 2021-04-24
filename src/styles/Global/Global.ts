import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    font-family: "Source Sans Pro", Helvetica, Arial, Sans-Serif;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    list-style: none;
  }

  body {
    background-color: var(--background);
    color: var(--text);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, select, button {
    font: 400 1rem "Source Sans Pro", Helvetica, Arial, Sans-Serif;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0px;
  }

  button {
    cursor: pointer;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }

  hr {
    color: var(--border);
    border-style: solid;
    border-width: 2px;
    max-width: 784px;
    margin: 4rem auto 4rem auto;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  :root {
    --background: #F5F6FA;
    --primary: #E02B57;
    --title: #2E2D33;
    --text: #757680;
    --dark: #1C1B1F;
    --button: #2E2D33;
    --green: #1BBC58;
    --yellow: #FF9A0D;
    --blue: #0D81FF;
    --white: #FFFFFF;
    --black: #000000;
  }
`;
