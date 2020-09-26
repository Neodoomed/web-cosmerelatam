import React, {Component, lazy, Suspense} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';

import Loader from './pages/loading';
//Pages
const NonFound = lazy(()=> import('./pages/404'));
const Index = lazy(()=> import('./pages/index'));
const News = lazy(()=> import('./pages/news'));

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      
    }
  }

  render(){
    return (
      
          <Router> 
          <Navbar/>
            <Suspense fallback={<Loader />}>
              <Switch>
                <Route exact path="/web-cosmerelatam/" component={Index} />
                <Route exact path="/web-cosmerelatam/news" component={News} />
                <Route exact path="/web-cosmerelatam/404" component={NonFound} />
                <Route component={NonFound} />
              </Switch>
              <Footer />
            </Suspense> 
          </Router>
    );
  }

}
export default App;