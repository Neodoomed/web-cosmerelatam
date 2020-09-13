import React from 'react';
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import Noticias from './component/Noticias/Noticias';

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Home />
      <Noticias />
      <Footer />
    </div>
  );
}

export default App;
