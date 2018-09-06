import React, { Component } from 'react';

class ProductDetail extends Component {
    constructor(){
        super()
        this.productCallback=this.productCallback.bind(this)
    }
    starrating(rating){
        let star=[];
            for(let i=parseInt(rating);i>0;i-- ){
                let eachStar = <span key={i} className='glyphicon glyphicon-star'></span>;
                star.push(eachStar);
            }
            return star;
        }
    productCallback(data){
        this.props.click(data)
    }
    render(){
        return(
            <div> 
                {this.props.products.products.map((products,index)=>{
                    return(
                       <div key={index}>
                            <div className="col-sm-4 col-lg-4 col-md-4">
                                <div className="thumbnail">
                                    <img src={products.imgUrl} alt=""/>
                                    <div className="caption">
                                        <h4 className="pull-right">{products.price}</h4>
                                        <h4><a href="#">{products.name}</a>
                                        </h4>
                                        <p>{products.description}</p>
                                    </div>
                                    <div className="ratings">
                                        <p className="pull-right">{products.reviews} reviews</p>
                                        <p>
                                            {this.starrating(products.rating)}
                                        </p>
                                    </div>
                                    <button type='button' onClick={()=>{this.productCallback(products)}}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                        );
                    })}
            </div>
            )
    }
}

export default ProductDetail;
