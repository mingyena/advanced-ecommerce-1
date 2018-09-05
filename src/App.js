import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Sidebar from './components/Sidebar';
import ProductDetail from './components/ProductDetail';
import Footer from './components/Footer';

class App extends Component {
    constructor(){
        super();
        this.changeOrderNumber=this.changeOrderNumber.bind(this);
    }
    state={orderNumber: 0}
    changeOrderNumber(){
        this.setState({orderNumber:this.state.orderNumber + 1});
    }
	render() {
		return (		
                <div className="App">
                  {<Header inreaseAmount={this.state.orderNumber}/>}
                  
                      <div className="container">
          
                          <div className="row">
                                  {<Sidebar/>}
                              <div className="col-md-9">
                                  {<Carousel/>}
                                  { <ProductDetail products={this.props.products} increaseOrder={this.increaseOrder} click={this.changeOrderNumber}/> }
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
}

export default App;
