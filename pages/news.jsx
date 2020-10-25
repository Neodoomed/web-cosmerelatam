import { Component } from 'react';
import { useState } from 'react';

import MainConteiner from './../components/main';
import SliderNews from './../components/news/sliderNews';
import NewsList from './../components/news/newsList';
import './../styles/news.css';

export default function News(props){
    return(
        <MainConteiner>
            <section className="news">
                <SliderNews></SliderNews>

                <nav className="category">
                    <input type="radio" name="category" id="category1" value="all"/>
                    <input type="radio" name="category" id="category2" value="news"/>
                    <input type="radio" name="category" id="category3" value="event"/>
                    <input type="radio" name="category" id="category4" value="adds"/>
                    <label  htmlFor="category1">Recientes</label>
                    <label  htmlFor="category2">Noticias</label>
                    <label  htmlFor="category3">Eventos</label>
                    <label  htmlFor="category4">Anuncios</label>
                </nav>

                <NewsList
                    results = {props.Results}
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