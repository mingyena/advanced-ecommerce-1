import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Sidebar from './components/Sidebar';
import ProductDetail from './components/ProductDetail';
import Footer from './components/Footer';

function App() {
    return (
      <div className="App">
        {<Header/>}
        
            <div className="container">

                <div className="row">
                        {<Sidebar/>}
                    <div className="col-md-9">
                        {<Carousel/>}
                        { <ProductDetail/> }

                    </div>

                </div>

            </div>
        
            <div className="container">
                <hr/>
                {<Footer/>}
            </div>
      </div>
    );
}

export default App;
