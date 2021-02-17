import "./App.css";
import { Routes } from "./core/components/Routes/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./core/components/Header/Header";
import { Menu } from "./core/components/Menu/Menu";
import { Loading } from './core/components/Loading/Loading';
import { useState } from 'react';
import { LoadingContext } from './core/components/Loading/contexts/LoadingContext';

function App() {

  const [isLoading, setIsLoading] = useState(false);

  return (
    <Router>
      <div className="App">
        <header className="App-header">

          <Header/>
          <Menu/>

          <LoadingContext.Provider value={{isLoading, setIsLoading}}>
          <Loading/>

          <Routes />

          </LoadingContext.Provider>

        </header>
      </div>
    </Router>
  );
}

export default App;
