import React,{Component} from 'react';
import AddProduct from './components/AddProduct';
import Products from './components/Products';

class App extends Component{
  constructor(){
    super();
    this.state = {
      menu: "products"
     
    }
   
    this.onProductsClicked = this.onProductsClicked.bind(this);
    this.onAddProductClicked = this.onAddProductClicked.bind(this);
   
  }
  onProductsClicked(){
    this.setState({
      menu: "products"
    })
  }
  onAddProductClicked(){
    this.setState({
      menu: "add-product"
    })
  }

  render(){
    return(
      <div className="App">
      <div className="Menu">

        <center >  
          <div className="space">
            <button className="btn btn-info" onClick={this.onProductsClicked}>Products</button>
            <button className="btn btn-warning" onClick={this.onAddProductClicked}>Add Product</button> 
          </div>
            
      </center>
      </div>
      {this.state.menu == "add-product" ?  <AddProduct/>: null}
      {this.state.menu == "products" ?  <Products />: null}
    </div>
    );
  }
}
export default App;
