import React, {Component, lazy, Suspense} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
//import Home from './component/Home/Home';
//import Noticias from './component/Noticias/Noticias';
import Footer from './component/Footer/Footer';
//const Home = lazy(()=> import('./component/Home/Home'));

//Pages
import Index from './pages/index';
import NonFound from './pages/404';

//Agregar "/web-cosmerelatam" a las url antes de hacer el build 
//

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/404" component={NonFound} />
          <Route component={NonFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
export default App;