import css from 'styled-jsx/css'

const color = {
    primary: '#393b40',
    secondary: '#939313',
    

}

export const globalStyles = css.global`
    html,
    body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    a {
    color: inherit;
    text-decoration: none;
    }

    * {
    box-sizing: border-box;
    }
`

export const loginStyles = css`
    section{
        background: url("/images/shadesmar.jpg");
        background-size: cover;
    }
    .main{
        position: relative;
        background-color: rgba(200, 200, 200, .5);
        min-width: 100%;
        min-height: 100vh;
        margin: auto;
        border-radius: 5px;
        padding: 40px 20px;
    }

    @media all and (min-width: 768px){
    .main{
        
        min-width: 600px;
        height: 90vh;
        min-height: 90vh;
    }
}
`