import css from 'styled-jsx/css'

const color = {
    primary: '#393b40',
    secondary: '#939313',
}

export const globalStyles = css.global`
html,
body {
  background-color: #202020;
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

section {
    position: relative;
    background-size: cover;
    background-position: right;
    background-position: left top;
    background-position: 20% top;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    padding-top: 70px;
    margin: 0;
}

`
export const errorStyles = css`
.non{
  min-width: 100%;
  min-height: 100vh;
  background: url(/images/Constelaciones-mundos-cosmere.jpg);
  background-size: cover;
  background-position: center;
}
.non div{
  color: rgb(128, 114, 79);
  text-shadow:0px 0px 3px #000000;
  align-self: center;
  text-align: center;
}
.non h2{
  font-size: 56px;
  margin-bottom: 50vh;
}
.non p{
  font-size: 24px;
}
`