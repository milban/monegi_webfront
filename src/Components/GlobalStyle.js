import { createGlobalStyle } from "styled-components"
import { reset } from "styled-reset"

const GlobalStyle = createGlobalStyle`
    ${reset}
    @import url('https://fonts.googleapis.com/css?family=Do+Hyeon&display=swap&subset=korean');
    * {
        box-sizing: border-box;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    body {
        font-family: 'Do Hyeon', 'sans-serif',-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        width: 100%;
        background-color: #1e272e;
        color: white;
    }
`

export default GlobalStyle
