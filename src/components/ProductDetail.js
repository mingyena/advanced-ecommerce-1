import React, { Component } from 'react';

class ProductDetail extends Component {
    starrating(rating){
        let star=[];
            for(let i=parseInt(rating);i>0;i-- ){
            let eachStar = <span key={i} className='glyphicon glyphicon-star'></span>;
            star.push(eachStar);
            }
            return star;
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
                                        <h4><a href="#">{products.id} Product</a>
                                        </h4>
                                        <p>{products.description}</p>
                                    </div>
                                    <div className="ratings">
                                        <p className="pull-right">{products.reviews} reviews</p>
                                        <p>
                                            {this.starrating(products.rating)}
                                        </p>
                                    </div>
                                    <button type='button' onClick={this.props.click}>Add to Cart</button>
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
