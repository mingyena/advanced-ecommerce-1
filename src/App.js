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
        this.updateOrder=this.updateOrder.bind(this);
    }
    state={orderNumber: 0,myOrder:[]};
    updateOrder(newProduct){
        this.setState({ myOrder: [...this.state.myOrder, newProduct] })
        this.setState({orderNumber:this.state.orderNumber + 1});
    }
    checkout(){

    }
    componentDidMount() {
        fetch('/checkout')
          .then(res => res.json())
          .then(users => this.setState({ users }));
      }
    
	render() {
		return (		
                <div className="App">
                  {<Header inreaseAmount={this.state.orderNumber} checkout={this.checkout}/> }
                      <div className="container">
          
                          <div className="row">
                                  {<Sidebar/>}
                              <div className="col-md-9">
                                  {<Carousel/>}
                                  { <ProductDetail products={this.props.products} 
                                    click={this.updateOrder}/> }
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
