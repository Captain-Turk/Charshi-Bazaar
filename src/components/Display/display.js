import React, {Component} from 'react'
import axios from 'axios'
import Product from '../Product/product'
import Cart from '../Cart/cart'

import Search from '../Search/search'
import CategoryList from '../CategoryList/categoryList'



class Display extends Component {
    constructor(){
      super()
        this.state = {
          inventory: [],
          cart:[]
          // cart:[{
          //   product_id, 
          //   quantity}]
           
          }
                  
         
    }
  

    componentDidMount = ()=>{
        axios.get('api/products')
        .then(res => {
          this.setState({
            inventory: res.data                    
          })
        }).catch(err=> console.log(err))
        axios.get('api/cart')
        .then(res=>{
          this.setState({
            cart: res.data
          })
        }).catch(err=> console.log(err))
    } 

    

    newCart = (product_id) => {
      axios.post('api/cart', {product_id, quantity:1})
      .then(res=>{
        this.setState({
          cart: res.data
        })
      }).catch(err=> console.log(err)) 
    }

    addToCart = (product) => {
      let {cart,inventory}= this.state
      var addedItem = cart.find(cartItem => cartItem.product_id === product.product_id);
      if (addedItem) {
        addedItem.quantity += 1;
      } else {
        cart.push({ product: product, quantity: 1 });
      }
  
      this.setState({ cart: cart });
      alert(`${inventory.name} in basket`);
    };


    // addToCart = (product) => {
    //   let newCart = this.state.cart;
    //   var addedItem = newCart.find((element) => element.product_id === product_id);
    //   if (addedItem) {
    //     addedItem.quantity += 1;
    //   } else {
    //     newCart.push({ product: product, quantity: 1 });
    //   }
  
    //   this.setState({ cart: 
    //     newCart });
    //   alertify.success(product.Name + " added to the cart.,", 2);
    // };


    // addToCart = (product_id) => {
    //   let {cart} = this.state
    //   let newProduct = cart
    //   const addedItem = cart.find((item) => item.product_id === product_id);
    //   if (addedItem) {
    //     addedItem.quantity = addedItem.quantity + 1;
    //   } else {
    //     newProduct.push({ product_id });
    //   }
    //   this.setState({ 
    //     cart: newProduct });
    //   this.updateCart()

    // }

 


    

    // addToCart = (product_id) => {
    //   let newProduct = this.state.cart;
    //   const addedItem = newProduct.find((item) => item.product_id === product_id);
    //   if (addedItem) {
    //     addedItem.quantity = addedItem.quantity + 1;
    //   } else {
    //     newProduct.push({ product_id, quantity: 1 });
    //   }
    //   this.setState({ cart: newProduct });
    //   this.updateCart()

    // }


    // filteredProducts = () => {
    //   this.state.inventory.filter(products => {
    //     return products.name.toLowerCase().includes(this.state.searchInput.toLoweCase())
    //   })

    // }
      
   
        

    



   


  
    
    



    render(){
        const {inventory, cart} = this.state
        return (
          <div className="Display">           
            <ul>
              <li>
                {inventory.map((product) => (
                <Product key={product.product_id} product={product} addToCart={this.addToCart}/>                  
                ))};
              </li>
            </ul>
            <Cart key={cart.cart_id} cart={cart} />
          </div>
        );
    }

}

export default Display