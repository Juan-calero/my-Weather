import logo from './logo.svg';
import './App.css';
import React from 'react';
import Search from './components/0.search/Search';
import Info from './components/2.info/Info';
import Cards from './components/1.cards/Cards';

function App() {
  return (
    <div className="app">
      <Search />
      <Cards />
      <Info />
    </div>
  );
}

export default App;
