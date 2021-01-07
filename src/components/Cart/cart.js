import axios from 'axios'
import React, {Component} from 'react'
import CartItem from '../CartItem/cartItem'

class Cart extends Component {
    constructor(props){
      super(props) 
        this.state = {
          cart:[],
          products:[],
          quantity:0,
          total:0
        }
      }


      componentDidMount = () => {
        axios.get('api/cart')
        .then(res => {
          this.setState({
            cart: res.data                    
          })
        }).catch(err=> console.log(err))

      }


            // orders:[],
            // cart: {
            //   cart_id: null,
            //   cart_products: {
            //     product_id: null, 
            //     quantity:0},
            //   total:0

            // }
            // cart:{
            //     cart_id:null,
            //     product: {product_id: null, quantity:0},
            //     total:0
            // }
      
    
    

    componentDidUpdate(cart_id, product_id, quantity, total) {
        axios.put(`/api/cart/${cart_id}`,{product_id,quantity,total}).then((res) => {
          this.setState({
            cart: res.data,
          })
        })
      }
    
      emptyCart(cart_id) {
        axios.delete(`/api/cart/${cart_id}`).then((res) => {
          this.setState({
            cart: res.data
          })
        })
      }

 
      checkout(cart_id, customer_name, customer_address, total){
          axios.checkOut('/api/orders', {cart_id, customer_name, customer_address, total}).then((res) => {
              this.setState({
                  order: res.data
              })
          })

      }



    render(){
        const {cart} = this.state
        return (
            <div className="cart-container">
              <div className="cart"> 
                <h2>My Cart</h2>
                {cart.map((item) => { 
                  return (
                    <CartItem
                      changeQuantity={this.changeQuantity}
                      emptyCart = {this.emptyCart}
                      key={item.product_id}
                      data={item}
                    />
                )
                })} 
            </div>
                <div className="total">
                 Your total: ${cart.total}
                <button onClick={this.checkout}>Checkout</button>
              </div>
            </div>
          )
    }
}




export default Cart