import React, {Component} from 'react';

class AddProduct extends Component{

    constructor(props) {
        super(props);
        
      }
    onAddProduct(event){
        event.preventDefault();

        let title = event.target["title"].value;
        let price = event.target["price"].value;
        let value =  event.target["value"].value;
        let image = event.target["image"].files.item(0).name;
        let oldprice = event.target["oldprice"].value;
        let id = JSON.parse(localStorage.getItem("id-product"));

        if(!id){
             id =1;
        }
        
        let product = {
            id: id++,
            title:title,
            price:price,
            oldprice:oldprice,
            type:value,
            image: image
        }

        let products = JSON.parse(localStorage.getItem("products"));

        if(!products){
            products = [];

        }
        products.push(product);
        localStorage.setItem("products",JSON.stringify(products));
        localStorage.setItem("id-product",id++);
        alert("Add product success!");
    }
    render(){
        return(
            <center>
                <hr></hr>
                <h1>Add new product</h1>
                <form className="form" onSubmit={this.onAddProduct}>
                <br />
                <input name="title" placeholder="title" className="input" />
                <br />
                <br />
                <input name="price" placeholder="price" className="input" />
                <br />
                <br />
                <input name="oldprice" placeholder="oldprice" className="input" />
                <br />
                <br />
                <select name="value">
                    <option value="nam">Nam</option>
                    <option value="nu">Nu</option>
                </select>
                <br/>
                <br />
                <input type="file" name="image"/>
                <button className="btn btn-success">add</button>
            </form>
            </center>
        );
    }
}
export default AddProduct;