import React, {Component, lazy, Suspense} from 'react';
import Home from '../component/Home/Home';
import Noticias from '../component/Noticias/Noticias';


class Index extends Component{
    render(){
        return(
            [<Home/>, <Noticias/>]
            )
    }

}

export default Index