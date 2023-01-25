import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --bg: white;
        --main: black;
        --sub: grey;
        --primary: #6E9CD7;
        --secondary: #FFD158;
        --error: red;
        --animation-length: 7s;
        --animation-1-delay-length: 6.5s;
        --animation-2-delay-length: 13s;
        --animation-3-delay-length: 19.5s; 
        --font-xsmall: 1.75rem;
        --font-small: 2.25rem;
        --font-medium: 3.5rem;
        --font-large: 5rem;
        --font-xlarge: 8rem;
        --font-2xlarge: 10rem;
        --pfp-xsmall: 100px;
        --pfp-small: 150px;
        --pfp-large: 350px;
        --pfp-medium: 250px;
        /* 6.5, 13, 19.5 */
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-size: 9px;
        color: var(--main);
        font-family: Manrope, serif;
        letter-spacing: 1px;
    }

    button {
        background: none;
        border: none;
        outline: none;
    }
    
    input {
        border: none;
        outline: none;
    }

    a {
        text-decoration: none;
    }
`;

const GlobalStyles = (): JSX.Element => {
  return <GlobalStyle />;
};

export default GlobalStyles;
