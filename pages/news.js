import { useState, useEffect } from 'react';
import { fetchNewsList } from './../firebase/client';
import MainConteiner from './../components/main';
import SliderNews from './../components/news/sliderNews';
import NewsList from './../components/news/newsList';
import GoTop from '../components/goTop';

import { newSecction, newStyle } from '../styles/newStyles';

export default function News(props) {
    // const [newsSlider, setSlider] = useState([]);
    const [newsList, setNews] = useState([]);

    const [section, setSection] = useState('all');
    const [page, setPage] = useState(5);
    const [reload, setReload] = useState(false);

    useEffect(async () => {
        setReload(false);
        await fetchNewsList(section, page).then(setNews);
        setReload(true);
    }, [section, page]);

    const handleChange = (event) => {
        event.preventDefault();
        setSection(event.target.value);
        setPage(5);
        // fetchData(event.target.value);
    };

    const hadleMore = () => {
        setPage(page + 5);
    };

    return (
        <MainConteiner>
            <GoTop />
            <section className="news">
                <SliderNews results={props.slider} />
                <nav className="category">
                    <form>
                        <input
                            type="radio"
                            name="category"
                            id="category1"
                            value="all"
                            checked={section === 'all'}
                            onChange={handleChange}
                        />
                        <input
                            type="radio"
                            name="category"
                            id="category2"
                            value="news"
                            checked={section === 'news'}
                            onChange={handleChange}
                        />
                        <input
                            type="radio"
                            name="category"
                            id="category3"
                            value="event"
                            checked={section === 'event'}
                            onChange={handleChange}
                        />
                        <input
                            type="radio"
                            name="category"
                            id="category4"
                            value="adds"
                            checked={section === 'adds'}
                            onChange={handleChange}
                        />
                        <label htmlFor="category1">Recientes</label>
                        <label htmlFor="category2">Noticias</label>
                        <label htmlFor="category3">Eventos</label>
                        <label htmlFor="category4">Anuncios</label>
                    </form>
                </nav>
                <NewsList
                    results={newsList}
                    more={hadleMore}
                    isLoad={reload}
                    thisStyle={newStyle}
                />
            </section>
            <style jsx>{newSecction}</style>
            <style jsx>{newStyle}</style>
        </MainConteiner>
    );
}
export async function getServerSideProps(ctx) {
    const slider = await fetchNewsList('all', 3).then((snapshot) => {
        return snapshot;
    });
    return { props: { slider: slider } };
}
