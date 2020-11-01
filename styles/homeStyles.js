import css from 'styled-jsx/css'

export const homeStyle = css`
.banner{
    position: relative;
    min-width: 100%;
    min-height: 100vh;
    background: url("/images/homeBackground.jpg");
    background-size: cover;
    background-position: right;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 70px;
    margin: 0;
}

.home{
    align-self: flex-start;
    margin: 0px 0px;
    padding: 0px 5%;
}

.titulo{
    font-size: 42px;
    color: #ffffff;
    font-weight: 500;
    text-shadow:0px 0px 10px #000000;
}

.home p{
    font-size: 20px;
    color: #ffffff;
    text-shadow:0px 0px 3px #000000;
}

.home .onDev{
    font-size: 24px;
    color: #ffffff;
    text-shadow:0px 0px 3px #ff0000;
    padding: 0;
    margin: 0;
}

.join{
    text-align: bottom;
    color: #ffffff;
    font-size: 16px;
    text-shadow:0px 0px 3px #000000;
}

.btn_join{
    justify-content: center;
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 50%;
    top: 100vh;
    transform: translate(-50%, -200px);
}
.btn_join button{
    width: 250px;
    height: 70px;
    margin-left: auto;
    margin-right: auto;
    font-size: 19px;
}
.btn-join{
	border: 1px solid #005b72;
	border-radius: 5px;
	background: #005b72;
    color: #ffffff;
	outline: none;
	cursor: pointer;
	margin: 0;
	padding: 10px 20px;
	margin-left: auto;
}
.btn-join:hover{
	border: 1px solid #0088a9;
	border-radius: 5px;
	background: #0088a9;
	color: #ffffff;
    outline: none;
    outline: rgba(0,136,169, .5);
}
.btn-join:active{
	border: 1px solid #0088a9;
	border-radius: 5px;
	background: #005b72;
	color: #ffffff;
	outline: none;
}
.btn-join:focus{
	outline: none;
}

@media all and (min-width: 768px){
    .home{
        align-self: flex-end;
        margin: 0 20px;
        transform: translate(0px, -55vh);
    }
}
`