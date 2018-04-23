import React from "react";
import '../App.css';
import headerlogo from '../img/telus_transparent_logo.png';
import footerlogo from '../img/telus_blackwhite_logo.png';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class List extends React.Component{
	render(){
		return(
      <div className="App">
        <header className="App-header">
          <img src={headerlogo} className="App-headerlogo" alt="logo" />
          <span className="App-headertext">Local Calling Guide</span>
        </header>       
        <div className="main">
          <div className="col-xs-12 form-container">
            <div className="number__info">
              <p className="number__key">NPA-NXX</p>
              <Link to={"/"}>
                <p className="number__value"> 604-111</p>
              </Link>
              <Link to={"/"}>
                <p className="number__value"> 604-111</p>
              </Link>      
              <Link to={"/"}>
                <p className="number__value"> 604-111</p>
              </Link>
              <Link to={"/"}>
                <p className="number__value"> 604-111</p>
              </Link>  
              <Link to={"/"}>
                <p className="number__value"> 604-111</p>
              </Link>
              <Link to={"/"}>
                <p className="number__value"> 604-111</p>
              </Link>  
              <Link to={"/"}>
                <p className="number__value"> 604-111</p>
              </Link>
              <Link to={"/"}>
                <p className="number__value"> 604-111</p>
              </Link>  
              <Link to={"/"}>
                <p className="number__value"> 604-111</p>
              </Link>
              <Link to={"/"}>
                <p className="number__value"> 604-111</p>
              </Link>        
              <Link to={"/"}>
                <p className="number__value"> 604-111</p>
              </Link>
              <Link to={"/"}>
                <p className="number__value"> 604-111</p>
              </Link>   
              <Link to={"/"}>
                <p className="number__value"> 604-111</p>
              </Link>
              <Link to={"/"}>
                <p className="number__value"> 604-111</p>
              </Link>                                                                                                            
            </div>
          </div>                         
        </div>    
        <footer className="App-footer">
            <img src={footerlogo} className="App-footerlogo" alt="logo" />
        </footer>  
      </div>
		);
	}
};

export default List;