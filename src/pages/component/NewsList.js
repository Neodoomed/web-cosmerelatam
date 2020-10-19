import React, {Component} from 'react';
import New from './New';

class NewsList extends Component{

    showNews(){
        const results = this.props.result;
        if(results.lengt === 0) return null; 

        console.log(this.props.result);
        return(
            <React.Fragment>
                {results.map(result=>(
                    <New
                        key={result.ID}
                        new={result}
                    />
                ))}
            </React.Fragment>
        )
    }

    render(){
        return(
            <div className='newsList'>
                <ul>
                    {this.showNews()}
                    <il className="more">Mas</il>
                </ul>
            </div>
        )
    }
}
export default NewsList