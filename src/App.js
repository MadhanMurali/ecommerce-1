import React from 'react';

//JS imports
import Header from './PageBlocks/Header/Header';
import Footer from './PageBlocks/Footer/Footer';

//CSS imports
import 'materialize-css/dist/css/materialize.min.css'; // keep this as first css import -- do not change line pos --
import './App.css';
import ProductView from './Pages/ProductView/ProductView';

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
