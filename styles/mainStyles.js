import css from 'styled-jsx/css'

export const navbarStyle = css`
.NavbarItems {
	background: linear-gradient(0deg, rgb(0, 0, 0, 1.0) 0% , rgba(0, 0, 0, 0.5) 80%, rgba(0, 0, 0, 0.5) 100%);
	backdrop-filter: blur(3px);
	padding: 0px;
	margin:0px;
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	z-index: 10;
	box-shadow: 0px 0px 10px #000000;
	display: flex;
	align-items: center;
	align-content: space-between;
	user-select: none;
}

.nav_logo{
	display: block;
	width: 70px;
	height: 50px;
    background: url('/images/LogoCL.png');
    background-repeat: no-repeat;
	background-size: cover;
	padding: 0;
	margin: 5px;
	margin-left: 20px;
	margin-right: 50px;
}

.NavbarItems ul{
	list-style: none;
	padding: 0;
	margin: 0;
	overflow: hidden;
	float: right;
	text-align: left;
}
.NavbarItems li{
	display: block;
	margin: 0;
	padding: 0;
	align-self: stretch;
    z-index: 5;
    color: #ffffff;
    padding: 18px 20px;
	font-size: 18px;
}
.NavbarItems li{
	color: #ffffff;
	right: 5%;
    text-decoration: none;
	transition: all .8s ease-in;
	display: block;
	padding: 18px 20px;
	font-size: 18px;
	border-left: 5px solid transparent;
}

.NavbarItems li:hover{
	color: rgb(197, 194, 19);
	text-decoration: none;
	text-shadow:0px 0px 10px #000000;
	transition: all .2s ease-in;
	list-style: none;
	border-left: 5px solid #0088a9;
}

.btn-lg{
	border: 1px solid #0088a9;
	border-radius: 5px;
	background: none;
	color: #0088a9;
	outline: none;
	cursor: pointer;
	margin: 0;
	padding: 10px 20px;
	margin-left: auto;
}
.btn-lg:hover{
	border: 1px solid #0088a9;
	border-radius: 5px;
	background: #0088a9;
	color: #ffffff;
	outline: none;
}
.btn-lg:active{
	border: 1px solid #0088a9;
	border-radius: 5px;
	background: none;
	color: #ffffff;
	outline: none;
}
.btn-lg:focus{
	outline: none;
}

.NavbarItems .nav_link{
	text-align: center;
	clear: both;
	width: 0;
	transition: all .5s ease-out;
	position: absolute;
	top: 0;
	right: 0;
	border-top: 55px solid #111111;
	background: #333333;
	height: 100vh;
	z-index: 5;
}

.NavbarItems .menuBtn{
	display: none;
}

.NavbarItems .menuIcon{
	border: 1px solid #0088a9;
	border-radius: 5px;
	padding: 20px 12px;
	cursor: pointer;
	z-index: 10;
	margin-left: auto;
	margin-right: 5px;
}

.NavbarItems .menuIcon:hover{
	background-color: #0088a9;
}

.menuIcon .bars{
	background: #999999;
	display: block;
	height: 2px;
	width: 18px;
	position: relative;
	transition: all .5s ease-out;

}
.menuIcon .bars::before,
.menuIcon .bars::after{
	background: #999999;
	content: "";
	height: 100%;
	width: 100%;
	position: absolute;
	transition: all .5s ease-out;
}
.menuIcon .bars::before{
	top: 5px;
}
.menuIcon .bars::after{
	top: -5px;
}

.menuBtn:checked ~ .nav_link{
	width: 300px;
}
.menuBtn:checked ~ .menuIcon .bars{
	background: none;
}
.menuBtn:checked ~ .menuIcon .bars::before{
	transform: rotate(-45deg);
	top: 0;
}
.menuBtn:checked ~ .menuIcon .bars::after{
	transform: rotate(45deg);
	top: 0;
}

.NavbarItems .barLine{
	min-width: 100px;
	height: 0px;
	border-top: 5px solid rgb(197, 194, 19);
	box-shadow: 0px 0px 10px rgb(197, 194, 19);
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1;
	transition-duration: .8s;
	display: none;
}


@media all and (min-width: 768px){
	.NavbarItems .nav_link {
		clear: none;
		width: auto;
		height: auto;
		position: relative;
		background: none;
		padding: 0;
		margin: 0;
		display: flex;
		align-content: center;
		border: none;
	}
	.NavbarItems .menuIcon{
		display: none;
	}
	.NavbarItems li{
        border: none;
        
	}
	.NavbarItems li:hover{
		border: none;
	}
}
`

export const footerStyle = css`
.Footer{
    background-color: #202020;
    position: relative;
    min-width: 100%;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 50px 0px;
}

.Footer div{
    width: 320px;
    margin: auto;
}
@media all and (min-width: 768px){
    .Footer div{
        width: 640px;
        margin: auto;
    }
}
@media all and (min-width: 1281px){
    .Footer div{
        width: 1200px;
        margin: auto;
    }
}

.line_1{
    margin-top: 10px;
    border: 1px solid #868686;
}

.copyright{
    margin: 20px 10px;
    color: #ffffff;
}

.social{
    display: flex;
	padding: 0%;
	top: 0;
	left: 0;
    right: 0;
    list-style: none;
    padding: 0px;
}

.social li{

    margin: 5px 10px;
}

.social a {
    background: #999999;
    color: #efefef;
    border-radius: 20px;
    text-decoration: none;
    line-height: 30px;
    width: 40px;
    height: 40px;
    font-size: 18px;
    display: flex;
}

.social li a div{
    margin: 10px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin: auto;
    width: 60%;
    height: 60%;
}

.fb_icon{
    background-image: url('/images/icons/facebook.png');
}
.tw_icon{
    background-image: url('/images/icons/twitter.png');
}
.ig_icon{
    background-image: url('/images/icons/instagram.png');
}
.dc_icon{
    background-image: url('/images/icons/discordia.png');
}
.yt_icon{
    background-image: url('/images/icons/youtube.png');
}


.social a.tw:hover {
    background: #00acee;
} 
.social a.fb:hover {
    background: #3b5998;
}
.social a.yt:hover {
    background: #dd4b39;
}
.social a.dc:hover {
    background: #3b5998;
}
.social a.ig:hover {
    background: #bb8d0e;
}
`