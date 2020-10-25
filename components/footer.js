import {SocialItems} from "./Socials";
import './../styles/footer.css';
//


export default function Index(props){
    return(
        <section className="Footer">
                <div>
                    <ul className="social">
                        {SocialItems.map((item, index) => {
                            return(
                                <li key={index}>
                                    <a href={item.url} className={item.cName} target="_blank" rel="noopener">
                                        <div className={item.cIcon}></div>
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                    <hr className="line_1"></hr>
                    <p className="copyright">©2020 diseñado y programado por Neodoom Xardax.</p>
                </div>
        </section>
    );
}
