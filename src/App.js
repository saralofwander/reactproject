import React from "react";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
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
     <Navbar class="navbar" bg="dark" variant ="dark" expand="lg">
 <Container>
    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as ={Link} to="/"><h4>Home</h4></Nav.Link>
        <Nav.Link as ={Link} to="/portfolio"><h4>Portfolio</h4></Nav.Link>
        <Nav.Link as ={Link} to="/about"><h4>About</h4></Nav.Link>
        <Nav.Link as ={Link} to="/contact"><h4>Contact</h4></Nav.Link>
        
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

    <div>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/portfolio" element={<Portfolio/>}>
        <Route path="slideshow" element={<Slideshow />} />
            </Route>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        
        
      </Routes>
      
    </div>
    </BrowserRouter>
    </div>
    
    
  );
}

/*
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
*/

export default App;
