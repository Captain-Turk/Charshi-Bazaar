import React, { Component } from "react";
import axios from "axios";
import Product from "../Product/product";
import Cart from "../Cart/cart";
import Header from '../Header/header'
import Search from "../Search/search";
import CategoryList from "../CategoryList/categoryList";

class Display extends Component {
  constructor() {
    super();
    this.state = {
      inventory: [],
      cart: [],
    };
    this.search = this.search.bind(this)
  }

  componentDidMount = async () => {
    
    const products = await axios.get("/api/products");
    const cart = await axios.get("/api/cart/1");

    this.setState({
      inventory: products.data,
      cart: cart.data,
    });
  };

  addToCart = (product_id) => {
    axios
      .post("/api/cart", { product_id, quantity: 1 })
      .then((res) => {
        this.setState({
          cart: res.data,
        });
      })
      .catch((err) => console.log(err));
  };

  search = (e, query) => {
    e.preventDefault()
    console.log('display',query)
    axios.get(`/api/search/${query}`).then(res => {

      console.log(res.data)
      this.setState({
        inventory: res.data
      })
    })
}

reset = async () => {
  const products = await axios.get("/api/products")
  this.setState({
    inventory: products.data
  })
}

  // let {cart,inventory}= this.state
  // var addedItem = cart.find(cartItem => cartItem.product_id === product.product_id);
  // if (addedItem) {
  //   addedItem.quantity += 1;
  // } else {
  //   this.setState({ cart: product_id, quantity: 1 });
  // }

  // this.setState({ cart: cart });
  // alert(`${inventory.name} in basket`);

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

  render() {
    const { inventory, cart } = this.state;
    console.log("inventory, cart", inventory, cart)
    return (
      <div className="Display">
              <Header search={this.search} reset={this.reset}/>

        {/* <Search /> */}
        <ul>
          <li>
            {inventory.map((product) => (
              <Product
                key={product.product_id}
                product={product}
                addToCart={this.addToCart}
              />
            ))}
            ;
          </li>
        </ul>
        <Cart key={cart.cart_id} cart={cart} />
      </div>
    );
  }
}

export default Display;
