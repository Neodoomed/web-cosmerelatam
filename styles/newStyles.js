import css from 'styled-jsx/css';

const color = {
  primary: '#393b40',
  secondary: '#939313',
};

export const newSecction = css`
    section {
        background: url("/images/newsBackground.jpg") no-repeat;
        background-size: cover;
        background-position: left top;
        background-position: 20% top;
        background-attachment: fixed;
        flex-direction: column;
    }

    @media all and (min-width: 768px){
    .new{
        padding-top: 66px;
        
    }
}
    
`;

export const newStyle = css`
h5{
    margin: 5px 0px;
}
.news .category{
    background-color: rgba(255, 255, 255, .8);
    backdrop-filter: blur(30px);
    box-shadow: 0px 0px 10px #000000;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    padding: 10px 0px;
}
.news input{
    display: none;
}
.news .category label{
    display: inline-block;
    min-width: 155px;
    height: 36px;
    line-height: 36px;
    background-color: rgba(57, 59, 64, 0.2);
    color: #393b40;
    border-radius: 4px;
    text-align: center;
    margin: 5px 10px;
    cursor: pointer;
    transition: all 0.2s 0s ease;
    user-select: none;
}
.news .category label:hover{
    color: rgb(197, 194, 19);
    background-color: #393b40;   
}
.news .category input[id="category1"]:checked ~ label[for="category1"]{
    color: rgb(197, 194, 19);
    background-color: #393b40;
}
.news .category input[id="category2"]:checked ~ label[for="category2"]{
    color: rgb(197, 194, 19);
    background-color: #393b40;
}
.news .category input[id="category3"]:checked ~ label[for="category3"]{
    color: rgb(197, 194, 19);
    background-color: #393b40;
}
.news .category input[id="category4"]:checked ~ label[for="category4"]{
    color: rgb(197, 194, 19);
    background-color: #393b40;
}

.newsList{
    width: 100%;
    background-color: rgba(255, 255, 255, .5);
    backdrop-filter: blur(20px);
    display: flex;
    align-items: top;
    justify-content: center;
    padding: 20px 0px;
}
.newsList ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;
    margin: 0;
}
.new{
    width: 100vw;
    min-height: 100px;
    position: relative;
    display: flex;
    flex-direction: row;
    background: rgb(230, 230, 230);
    border-radius: 5px;
    padding: 5px 10px;
    margin: 5px 0px;
    transition: all .2s ease-out;
}
.new:hover{
    background: rgb(255, 255, 255);
    box-shadow: 0 0 0 4px rgb(197, 194, 19);
}
.new a{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: start;
    overflow: hidden;
}

.more{
    width: 100%;
    min-width: 100%;
    height: 50px;
    margin: 0px;
    margin-top: 20px;
}

.new .img {
    min-width: 80px;
    height: 50px;
    background-color: rgba(30, 30, 30, 0.7);
    margin-right: 20px;
    align-self: center;
}
.new .content{
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: top;
    margin: 0px;

}

.new .data{
    position: absolute;
    display: flex;
    justify-content: flex-end;
    width: 300px;
    bottom: 16px;
    right: 16px;
    color: rgba(80, 80, 80, 1);
    font-weight: 400;
    font-size: 9px;
}
.new .section{
    margin-left: 52px;
    text-align: right;
}

.new h3{
    color: #000000;
    font-weight: 500;
    font-size: 15px;
    margin: 0px;
}
.new p{
    margin-top: 11px;
    font-size: 16px;
    color: #7d7d7d;
    display: none;
}

@media all and (min-width: 768px){
    .newsList{
        flex-direction: row;
        padding: 50px 0px;
    }
    .newsList ul{
        flex-direction: column;
    }
    .new{
        min-width: 300px;
        width: 1280px;
        min-height: 170px;
        margin: 10px 0px;
        padding: 15px 20px;
    }
   .more{
        width: 1280px;
        height: 80px;
    }
    .new .img {
        width: 265px;
        height: 140px;
        background-color: rgba(30, 30, 30, 0.7);
        margin-right: 20px;
        padding: 0px;
    }
    .new .content{
        width: calc(100% - 285px);
        margin: 0;
    }
    .new h3{
        color: #000000;
        font-weight: 500;
        font-size: 19px;
        margin: 0px;
    }
    .new p{
        margin-top: 11px;
        font-size: 16px;
        color: #7d7d7d;
        display: block;
    }
    .new .data{
        font-weight: 600;
        font-size: 12px;
    }
}
`;

export const sliderStyle = css`
.topNews{
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 70px 0px;
    justify-self: start;
}

.sliderMain{
    width: 350px;
    overflow: hidden;
    display: flex;
    justify-self: start;
}

.topNews ul{
    position: relative;
    display: flex;
    align-items: center;
    padding: 0px;
    margin: 0;

    transform: translate(0px, 0px);
    transition: all 600ms ease;
    animation-name: autoSlide;
    animation-duration: 20.5s;
    animation-direction: alternate;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
}

.topNews li{
    position: relative;
    width: 320px;
    height: 250px;
    background: rgba(30, 30, 30, 0.7);
    backdrop-filter: blur(3px);
    border-radius: 5px;
    padding: 15px;
    margin: 10px 15px;
    display: flex;
    flex-direction: column;
    transition: all 0.2s ease-out;
}
.topNews li:hover{
    box-shadow: 0px 0px 0 2px rgba(0, 0, 0, 0.7);
}

.topNews li .newsImg{
    background: #333333;
    width: 283px;
    height: 123px;
    margin: 0;
    align-self: center;
}
.topNews li .newsTitle h1{
    color: #ffffff;
    font-size: 22px;
    font-weight: 500;
    text-shadow: 0px 0px 3px #000000;
    margin: 10px 0px;
}
.topNews li .newsText{
    min-height: 130px;
    display: none;
}
.topNews li .newsText p{
    color: #ffffff;
    font-size: 18px;
    overflow: hidden;
    text-shadow: 0px 0px 3px #000000;
}
.topNews li .newsOrigin{
    position: absolute;
    bottom: 0px;
    right: 10px;
    width: 283px;
    margin-top: auto;
    display: flex;
    overflow: hidden;
    font-size: 11px;
    text-shadow: 0px 0px 3px #000000;
}
.topNews li .newsOrigin .date{
    
    color: rgb(197, 194, 194);
}
.topNews li .newsOrigin .origin{
    margin-left: auto;
    color: rgb(197, 194, 19);
}

.topNews .sliderBar{
    display: flex;
    align-items: center;
    justify-content: center;
}
.topNews input{
    display: none;
}
.topNews .sliderBar label{
    margin: 5px 15px;
    display: block;
    width: 30px;
    height: 30px;
    background: rgba(57, 59, 64, 0.3);
    border: solid 5px rgba(57, 59, 64, 0.5);
    border-radius: 10px;
}

input[id="slider1"]:checked ~ .sliderMain .slider{
    animation: none;
    transform: translate(0, 0);
}
input[id="slider1"]:checked ~ .sliderBar label[for="slider1"]{
    background: rgba(197, 194, 19, .6);
}

input[id="slider2"]:checked ~ .sliderMain .slider{
    animation: none;
    transform: translate(-350px, 0px);
}
input[id="slider2"]:checked ~ .sliderBar label[for="slider2"]{
    background: rgba(197, 194, 19, .6);
}

input[id="slider3"]:checked ~ .sliderMain .slider{
    animation: none;
    transform: translate(-700px, 0px);
}
input[id="slider3"]:checked ~ .sliderBar label[for="slider3"]{
    background: rgba(197, 194, 19, .6);
}

@media all and (min-width: 768px){
    .news{
        background-size: cover;
    }
    .topNews ul{
        flex-direction: row;
        padding: 0px 0px;
        transform: translate(0, 0);
        animation: none;
    }
    .topNews li .newsImg{
        background: #333333;
        width: 380px;
        height: 190px;
    }
    .topNews li{
        width: 420px;
        height: 450px;
        min-height: 450px;
        margin: 5px;
    }
    .topNews li .newsText{
        min-height: 130px;
        display: inline-block;
    }
    .sliderMain{
        width: 100%;
    }
    .topNews .sliderBar{
        display: none;
    }
}

/* Animacion */

@keyframes autoSlide{
    0%{
        transform: translate(0, 0);
    }
    30%{
        transform: translate(0, 0);
    }
    40%{
        transform: translate(-350px, 0);
    }
    70%{
        transform: translate(-350px, 0);
    }
    80%{
        transform: translate(-700px, 0);
    }
    100%{
        transform: translate(-700px, 0);
    }
}
`;

export const articleStyles = css`
div{
    display: flex;
    flex-direction: column;
}

.article{
    background-color: #ffffffaa;
    backdrop-filter: blur(20px);
    margin: 0px 0px;
    padding: 0px 20px;
    width: 100%;
    min-height: 301px;
    border-top: solid 3px rgb(197, 194, 19);
    border-radius: 5px;
}
.back{
    background: none;
    backdrop-filter: none;
    height: 30px;
    color: rgb(0, 0, 0);
    font-weight: 500;
    font-size: 19px;
    margin: 5px 0px;
}
h1{
    height: 30px;
    color: rgb(0, 0, 0);
    font-weight: 500;
    font-size: 19px;
}
span{
    color: rgba(80, 80, 80, 1);
    font-weight: 500;
    font-size: 10px;
}
p {
    color: #000000;
    font-weight: 400;
}
.text{
    color: #000000;
    font-weight: 400;
    font-size: 16px;
}

@media all and (min-width: 768px){
    .article{
        width: 900px;
        border-top: solid 5px rgb(197, 194, 19);
        margin: auto;
        margin-top: 10px;
        background-color: #ffffff99;
        border-top: 0;
        box-shadow: 0px 0px 5px #00000099;
    }
    .back{
        width: 100vw;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #ffffff;
        margin: 0px;
        margin-top: 40px;
        padding: 0px;
        box-shadow: 0px 0px 10px #000000;
        border-bottom: solid 3px rgb(197, 194, 19);
    }
    .back div{
        width: 900px;
        margin: 20px auto;
    }
    .body{
        width: 100vw;
        display: flex;
        justify-content: center;
        background-color: #ffffff99;
        backdrop-filter: blur(20px);
        padding-bottom: 210px;
    }
}

`;
