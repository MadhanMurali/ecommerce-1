import React from 'react';
import './App.css';

//JS imports
import Header from './PageBlocks/Header/Header';
import Footer from './PageBlocks/Footer/Footer';

//CSS imports
import 'materialize-css/dist/css/materialize.min.css'; // keep this as first css import -- do not change line pos --
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
