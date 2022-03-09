import React from "react";
//css
import '../css/index.css';

const PortfolioList = ({portfolios, title}) => {
   

    

    return (  
        <div className="portfolio-list">
            <h3>{ title }</h3>
            {portfolios.map((portfolio) => (
            <div className="portfolio-preview" key={portfolio.id}>
                <h3>{ portfolio.title }</h3>
            </div>
            ))}
        </div>
    );
}
 
export default PortfolioList;