import "./App.css";
import { Routes } from "./core/components/Routes/Routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      
      <div style={{width:"90%",margin:"auto"}}>
        <Routes />
      </div>
      
    </Router>
  );
}

export default App;
