import React, {Component} from 'react';
import ProductItem from './ProductItem';
import './css.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class Products extends Component{
    
    constructor(){
        super();
        this.products = JSON.parse(localStorage.getItem("products"));

        if(!this.products){
                this.products = [
                    {
                        id:1,
                        title:'Quan tay nam',
                        price:250000,
                        oldprice:350000,
                        type:'nam',
                        image:'h1.jpg'
                    },
                    {
                        id:2,
                        title:'Ao phong',
                        price:200000,
                        oldprice:240000,
                        type:'nam',
                        image:'h2.jpg'
                    },
                    {
                    id:3,
                    title:'Ao somi nam',
                    price:300000,
                    oldprice:450000,
                    type:'nam',
                    image:'h4.jpg'
                },
                {
                    id:4,
                    title:'Váy đẹp',
                    price:200000,
                    oldprice:250000,
                    type:'nu',
                    image:'h0.jpg'
                },
                {
                    id:5,
                    title:'Váy đẹp',
                    price:300000,
                    oldprice:350000,
                    type:'nu',
                    image:'h5.jpg'
                },
                {
                    id:6,
                    title:'Váy đẹp',
                    price:280000,
                    oldprice:310000,
                    type:'nu',
                    image:'h8.png'
                }
            ];
       }
        localStorage.setItem("products",JSON.stringify(this.products));
        {
            this.state = {
                products: this.products
            }
        }
        
       
       
    }
    onAddClick(item){
        return(event)=>{
            alert("Thanks for your order");
        }
    }
    render(){
        return(
            <div>
               <center><h1 className="title">List Products</h1></center>
                 <div className="container" >
                    {this.products.map((item)=>
                         <ProductItem 
                             item ={item}
                             onClick = {this.onAddClick(item)}
                         />
                       )
                     }
                </div>
            </div>
        );
    }
}
export default Products