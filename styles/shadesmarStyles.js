import css from 'styled-jsx/css';

const color = {
  primary: '#393b40',
  secondary: '#939313'
};

export default css.global`
    .Shadesmar{
        background: url("/images/shadesmar.jpg");
        background-size: cover;
        display: flex;
        padding: 0;
        margin: 0;
        align-items: flex-start;
    }
    .navbar{
        background-color: ${color.primary};
        width: 300px;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
    }
    .navbar>div, 
    .navbar>div>a{
        display: flex;
        width: 300px;
        height: 50px;
        align-items: center;
        justify-content: center;
    }
    .navbar .link{

    }

    .main{
        display: flex;
        width: 100%;
        flex-direction: column;
        margin-left: 300px;
    }
    .main>div{
        display: block;
        min-width: 500px;
        width: 900px;
        background-color: rgba(200, 200, 200, .5);
        margin: 0px;
        border-radius: 5px;
        padding: 40px 20px;
        margin: auto;
        margin-top: 100px
    }
    .main>.header_section{
        min-width: 100%;
        height: 150px;
        background-color: transparent;
        margin: 0;
        padding: 20px;
        display: flex;
        flex-direction: row;
    }
    .header_section>div{
        display: flex;
        width: 300px;
        height: 50px;
        align-items: center;
        justify-content: center;
    }
    
    .user{
        margin-left: auto;
    }
    .user>img{
        width: 35px;
        height: 35px;
        padding: 0;
        margin: 0 10px;
        border: solid 3px rgba(100, 100, 100, 1);
        border-radius: 999px;
    }
    .content textarea, 
    .content input,
    .content select{
        width: 100%;
        height: 400px;
        background: rgba(230, 230, 230, .8);
        border: none;
        border-radius: 5px;
        margin 10px 0px;
        padding: 10px;
        transition: all .3s ease-out;
        resize: none;
    }
    .content textarea:hover,
    .content input:hover,
    .content select:hover{
        background: rgba(255, 255, 255, .8);
        box-shadow: 0 0 0 4px rgb(197, 194, 19);
        outline: none;
    }
    .content textarea:focus,
    .content input:focus,
    .content select:focus{
        box-shadow: 0 0 0 4px rgb(197, 194, 19);
        outline: none;
    }
    .content input{
        height: 40px;
    }
    .content select{
        height: 40px;
    }
}
`;
