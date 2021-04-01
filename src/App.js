
import './App.css';
import AppLeft from './components/AppLeft/index'
import AppRight from './components/AppRight/index'
import {useState, useMemo} from 'react';
import CountryContextProvider from './components/CountryContextProvider'

function App() {

  return (
    <CountryContextProvider>
      <div className="app">
        <AppLeft className="app__left"/>
        <AppRight className="app__right"/>
      </div>
    </CountryContextProvider>
  );
}

export default App;
