import React from 'react';
import Menu from './components/MenuLateral/Menu';
import PilarCampanha from './telas/PilarCampanha/PilarCampanha';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (    
    <div className="container-fluid p-0">                  
      <Header/>
      <PilarCampanha/>      
      <Footer/>                  
    </div>
  );
}

export default App;
