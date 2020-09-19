import React, {Component, lazy, Suspense} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';

//const Home = lazy(()=> import('./component/Home/Home'));
import Loader from './pages/loading';
//Pages
//import Index from './pages/index';
//import NonFound from './pages/404';
const Index = lazy(()=> import('./pages/index'));
const NonFound = lazy(()=> import('./pages/404'));



//Agregar "/web-cosmerelatam" a las url antes de hacer el build 
//
/*
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/web-cosmerelatam/" component={Index} />
          <Route exact path="/web-cosmerelatam/404" component={NonFound} />
          <Route component={NonFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}*/
function App() {
  return (
    <div className="App">
     
        <Router> 
        <Navbar />
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route exact path="/web-cosmerelatam/" component={Index} />
              <Route exact path="/web-cosmerelatam/404" component={NonFound} />
              <Route component={NonFound} />
            </Switch>
            <Footer />
          </Suspense> 
        </Router>
    </div>
  );
}
export default App;