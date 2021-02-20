import "./App.css";
import { Routes } from "./core/components/Routes/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import { Loading } from "./core/components/Loading/Loading";
import { LoadingContext } from "./core/components/Loading/contexts/LoadingContext";

function App() {
  const [isLoading,setIsLoading] = useState(false);
  return (
    <Router>
    
      <div>
        <LoadingContext.Provider value={{isLoading,setIsLoading}}>
          <Loading/>
          <Routes />
        </LoadingContext.Provider>
      </div>
      
    </Router>
  );
}

export default App;
