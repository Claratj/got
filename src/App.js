import "./App.css";
import { Routes } from "./core/components/Routes/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./core/components/Header/Header";
import { Menu } from "./core/components/Menu/Menu";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">

          <Header/>
          <Menu/>
          <Routes />
        </header>
      </div>
    </Router>
  );
}

export default App;
