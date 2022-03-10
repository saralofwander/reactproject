import React from "react";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
//css
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//pages
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Slideshow from "./pages/Slideshow";



function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          
          </nav>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} >
              <Route path="slideshow" element={<Slideshow />} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}


export default App;
