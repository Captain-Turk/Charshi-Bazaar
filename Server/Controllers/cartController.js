const updateCartTotal = () => {
  const total = cart.items.reduce((acc, element) => {
    return acc + element.price * element.quantity
  }, 0)

  cart.total = total.toFixed(2)
}

module.exports = {
  getCart: (req, res) => {
    const dbInstance = req.app.get('db')
    dbInstance.get_cart()
    .then(cart =>{
      res.status(200).send(cart)
    })    
  },
  addToCart: (req, res) => {
    const dbInstance = req.app.get('db')    
    // const {cart_id, total, product_id, quantity } = req.body
    const { cart_id } = req.params
    const {total, product_id, quantity } = req.body

    dbInstance.add_to_cart(cart_id,product_id,quantity,total)
    .then(cart=>{
        res.status(200).send(cart)
    })
   
 },
  
 changeQuantity: (req, res) => {
    const dbInstance = req.app.get('db')     
    const { cart_id } = req.params
    const {total, product_id, quantity } = req.body
 

    dbInstance.change_quantity(cart_id,product_id,quantity,total)
    .then(cart=>{
        res.status(200).send(cart)
    })

},


removeFromCart: (req, res) => {
    const { cart_id } = req.params

    const index = cart.items.findIndex((element) => element.cartId === +cart_id)

    if (index === -1) {
      return res.status(404).send('Item not in cart')
    }

    cart.items.splice(index, 1)

    updateCartTotal()

    res.status(200).send(cart)
  },
  checkout: (req, res) => {
    const dbInstance = req.app.get('db')     
    const { cart_id } = req.params

    dbInstance.check_out(cart_id)
    .then(cart=>{
        res.status(200).send(cart)
    })
  },
}