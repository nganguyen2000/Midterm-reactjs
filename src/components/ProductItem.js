import React, {Component} from 'react';
import './css.css';
class ProductItem extends Component{

    
    render(){
        const {item,onClick} = this.props;
       
        return(
            <div className="khungsp">        
            <div className="rownam">
                <div className="sp">
                    <img className="img" src={"Image/" +this.props.item.image} />
                    <h3 className="nameproduct">{item.title}</h3>
                   <div className="flex">
                       
                        <p className="price">{item.price} VND</p>
                        <p className="oldprice">{item.oldprice} VND</p>
                   </div>
                    
                    <button className="btn btn-warning" onClick={onClick} type="button">Add to cart</button>
                </div>
            </div>    
            </div>
          
        );
    }
}
export default ProductItem;

