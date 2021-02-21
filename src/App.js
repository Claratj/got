import "./App.css";
import { Routes } from "./core/components/Routes/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { Loading } from './core/components/Loading/Loading';
import { useState } from 'react';
import { LoadingContext } from './core/components/Loading/contexts/LoadingContext';

function App() {

  const [isLoading, setIsLoading] = useState(false);

  return (
    <Router>
          <LoadingContext.Provider value={{isLoading, setIsLoading}}>
          <Loading/>
          <Routes />
          </LoadingContext.Provider>
    </Router>
  );
}

export default App;
