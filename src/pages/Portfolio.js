import React from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
//css
import '../css/index.css';
//pages
import PortfolioList from './PortfolioList';
import Slideshow from "./Slideshow";


/*
function Products() {
    return (
      <div className="products">
        <div className="productsNav">
          <Link to="/products/search"> Search </Link>
          <Link to="/products/list"> List </Link>
          <Link to="/products/add"> Add </Link>
        </div>
  
        <Outlet />
      </div>
    );
  }
  */

const Portfolio = () => {

    const [portfolios, setPortfolios] = useState([
        /*{title: 'Perfumes', body: 'lorem ipsum...', id: 1},
        {title: 'Art', body: 'lorem ipsum...', id: 2},
        {title: 'Jewellry', body: 'lorem ipsum...', id: 3}*/
        
    ]);

    return (

            <div className="portfolio">
                <h2>Portfolio</h2>
                <PortfolioList portfolios={portfolios} />
                <nav>
                <Link to="/portfolio/slideshow">Mushrooms</Link>
                
                <br></br><br></br>
                </nav>
                <Outlet />
            </div>
            
            
            
    );
}
 
  
  
export default Portfolio;