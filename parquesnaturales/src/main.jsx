import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Collserola from "./components/Collserola.jsx";
import ElDeltadeLlobregat   from "./components/ElDeltadeLlobregat.jsx";
import  Garraf  from "./components/Garraf.jsx";
import  Llobregrat  from "./components/Llobregrat.jsx";
import  Montseny  from "./components/Montseny.jsx";
import  Montserrat  from "./components/Montserrat.jsx";
import  Pedraforca  from "./components/Pedraforca.jsx";
import  SantLlorenc  from "./components/SantLlorenc";
import  Vallvidrera  from "./components/Vallvidrera";
import Home from './components/Home.jsx'
import NotFound from "./components/P404";
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.createRoot(document.getElementById('root')).render(

<React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />

          <Route path="/garraf" element={<Garraf />} />
          <Route path="/collserola" element={<Collserola />} />
          <Route path="/el_delta_de_llobregat" element={<ElDeltadeLlobregat />} />
          <Route path="/llobregat" element={<Llobregrat />} />
          <Route path="/montseny" element={<Montseny />} />
          <Route path="/montserrat" element={<Montserrat />} />
          <Route path="/pedraforca" element={<Pedraforca />} />
          <Route path="/santllorenc" element={<SantLlorenc />} />
          <Route path="/vallvidrera" element={<Vallvidrera />} />
          <Route element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
)
