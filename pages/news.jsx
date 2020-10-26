import { Component } from 'react';
import { useState } from 'react';

import MainConteiner from './../components/main';
import SliderNews from './../components/news/sliderNews';
import NewsList from './../components/news/newsList';
import './../styles/news.css';


export default function News(props){

    const [results, setResults] = useState(props.Results);
    const [section, setSection] = useState('all');
    const [page, setPage] = useState(5);

    
    const fetchData = async (sec) =>{
        const urlApi = `https://cosmere-latam.000webhostapp.com/app/index.php?f=newsListAll&sec=${sec}&page=5`;
        console.log(urlApi);
        const res = await fetch(urlApi);
        const json = await res.json();
        console.log(json);
        setResults(json);
    }

    const handleChange = (event) =>{
        event.preventDefault();
        setSection(event.target.value);
        fetchData(event.target.value);
    }

    return(
        <MainConteiner>
            <section className="news">
                <SliderNews></SliderNews>
                
                <nav className="category">
                    <form>
                        <input type="radio" name="category" id="category1" 
                            value="all"
                            checked={section === "all"}
                            onChange={handleChange}
                        />
                        <input type="radio" name="category" id="category2" 
                            value="news"
                            checked={section === "news"}
                            onChange={handleChange}
                        />
                        <input type="radio" name="category" id="category3" 
                            value="event"  
                            checked={section === "event"}
                            onChange={handleChange}
                        />
                        <input type="radio" name="category" id="category4" 
                            value="adds" 
                            checked={section === "adds"}
                            onChange={handleChange}
                        />
                        <label  htmlFor="category1">Recientes</label>
                        <label  htmlFor="category2">Noticias</label>
                        <label  htmlFor="category3">Eventos</label>
                        <label  htmlFor="category4">Anuncios</label> 
                    </form>
                </nav>
                
                <NewsList
                    results = {results}
                />
                
            </section>
        </MainConteiner>
    )
}
export async function getStaticProps(ctx) {
    const urlApi = `https://cosmere-latam.000webhostapp.com/app/index.php?f=newsListAll&sec=all&page=5`;
    const res = await fetch(urlApi);
    const json = await res.json();
    return {props: { 
                Results: json 
            }
        }
}