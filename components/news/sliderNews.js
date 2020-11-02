//import './../../styles/sideNews.css';
import Link from 'next/link';
import { sliderStyle } from '../../styles/newStyles'

export default function SliderNews(props){
    
    return(
        <div className="topNews">
            <input type="radio" name="slider" id="slider1"/>
            <input type="radio" name="slider" id="slider2"/>
            <input type="radio" name="slider" id="slider3"/>
            <div className="sliderMain">

                <ul className="slider">
                {props.results.map(result=>(
                    <Link href='news/[id]' as={`/news/${result.id}`} key={result.id}>
                        <li>
                            <img src={ result.banner } className="newsImg" />
                            <div className="newsTitle">
                                <h1>{ result.title }</h1>
                            </div>
                            <div className="newsText">
                                <p>{ result.subTitle }</p>
                            </div>
                            <div className="newsOrigin">
                                <p className="date">{ result.date }</p>
                                <p className="origin">{ result.section }</p>
                            </div>
                        </li>
                    </Link>
                    ))
                }
                </ul>
            </div>
            <nav className="sliderBar">
                <label htmlFor="slider1"></label>
                <label htmlFor="slider2"></label>
                <label htmlFor="slider3"></label>
            </nav>
            <style jsx>{ sliderStyle }</style>
        </div>
        
    );
}