import Header from './layout/Header'

import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./routes/index";


import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>
       
    </div>
  );
}

export default App;
