import React from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
//css
import '../css/index.css';
//pages
import PortfolioList from './PortfolioList';
import Slideshow from "./Slideshow";


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
                <Slideshow />
                <Outlet />
            </div>
            
            
            
    );
}
 
  
  
export default Portfolio;