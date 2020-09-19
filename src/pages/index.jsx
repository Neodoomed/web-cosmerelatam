import React, {Component, lazy, Suspense} from 'react';
import Home from '../component/Home/Home';
import Noticias from '../component/Noticias/Noticias';

//const Home = lazy(()=> import('../component/Home/Home'));
//const Noticias = lazy(()=> import('../component/Noticias/Noticias'));

//const Loading =()=> <nav>Loading...</nav>

class Index extends Component{
    render(){
        return(
           [<Home/>, <Noticias/>]
            /*<Suspense fallback={<Loading></Loading>}>
                <Home/>
                <Noticias/>
            </Suspense>*/
            )
    }

}

export default Index