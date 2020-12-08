import css from 'styled-jsx/css';

export const globalStyles = css.global`
html,
body {
  background-color: #202020;
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

textarea , input{
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
  user-select: none;
}

* {
  box-sizing: border-box;
}

section {
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

.btn-withe{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: rgba(230, 230, 230, .8);
    color: #000000;
    backdrop-filter: blur(3px);
    border: none;
    border-radius: 5px;
    padding: 10px;
    padding: 10px 10px;
    transition: all .2s ease-out;
    user-select: none;
    outline: none;
}
.btn-withe:hover{
    background: rgba(255, 255, 255, .8);
    box-shadow: 0 0 0 4px rgb(197, 194, 19);
    outline: none;
}
.btn-withe:active{
  outline: none;
}
.btn-withe:focus{
  outline: none;
}


.btn-black{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #393b40cc;
    color: #ffffff;
    backdrop-filter: blur(3px);
    border: none;
    border-radius: 5px;
    padding: 10px;
    margin: 10px 10px;
    transition: all .2s ease-out;
    user-select: none;
    outline: none;
}
.btn-black:hover{
  background-color: #393b40;
  box-shadow: 0 0 0 4px rgb(197, 194, 19);
  color: rgb(197, 194, 19);
  outline: none;
}
.bbtn-black:active{
  outline: none;
}
.btn-black:focus{
  outline: none;
}

`;
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
`;

export const icons = css`

`;
