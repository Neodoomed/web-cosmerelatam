import React, {Component, lazy, Suspense} from 'react';
import Navbar from './component/Navbar/Navbar';
/*import Home from './component/Home/Home';*/
import Noticias from './component/Noticias/Noticias';
import Footer from './component/Footer/Footer';
const Home = lazy(()=> import('./component/Home/Home'));


function App() {
  return (
    <div className="App">
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
      <Home />
      <Noticias />
      <Footer />
      </Suspense>
    </div>
  );
}

export default App;
