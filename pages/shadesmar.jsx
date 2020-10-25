
export default function Shadesmar(){
    return(
        <>
        <section className="Shadesmar">
            <div className="main">
                <h1>Has estrado en Shadesmar.</h1>
                <h2>Desde aqui puedes moldar el mundo.</h2>
            </div>
        </section>
        
        <style jsx>{`
            *{
                margin: 0;
                padding: 0;
            }
            section{
                position: relative;
                min-width: 100%;
                min-height: 100vh;
                background: url("/images/shadesmar.jpg");
                background-size: cover;
                background-position: left;
                display: flex;
                align-items: center;
                justify-content: center;
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

        `}</style>
        </>
    );
}