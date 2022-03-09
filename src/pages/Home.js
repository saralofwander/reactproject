import React from "react";
//css
import '../css/index.css';
//pages

//logo
import logo from '../images/210212_wan-51.jpg'


const Home = () => {

  const title = 'WAN WAN';

    return (
      <header className="App-header">
            <h1>{ title }</h1>
            <img src={ logo } className="App-logo" alt="logo" />
            </header>
      );
    }

 
export default Home;  