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
      <div style={{width:"90%",margin:"auto"}}>

          <Header/>
          

          <LoadingContext.Provider value={{isLoading, setIsLoading}}>
          <Loading/>
          
          <Routes />
          <Menu/>
          </LoadingContext.Provider>

      </div>
    </Router>
  );
}

export default App;
