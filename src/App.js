import React from 'react';
import './css/App.css';
import './css/styles.css';

import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar sticky="top"/>
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;
