
import './../../styles/newsList.css';


export default function newList(props){
    return(
        <>
        <div className='newsList'>
            <ul>
                {props.results.map(result=>(
                        <li className='new' key={result.ID}>
                            <div className='img'>
                            </div>
                            <div className='content'>
                                <div className='title'>
                                <h5>{result.Title}</h5>
                                </div>
                                <div className='text'>
                                    <p>{result.News}</p>
                                </div>
                                <div className='data'>
                                    <div className='date'>{result.Date}</div>
                                    <div className='section'>{result.Section}</div>
                                </div>
                            </div>
                        </li>
                    ))
                }
                <li className="more">Mas</li>
            </ul>
        </div>
        </>
    )
}
