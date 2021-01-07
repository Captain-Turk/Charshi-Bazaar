module.exports = {
  getCart: (req, res) => {
    const dbInstance = req.app.get('db')
    const { cart_id } = req.params
    dbInstance.get_cart(cart_id)
    .then(cart =>{
      res.status(200).send(cart)
    })    
  },
  newCart: (req, res) => {
    const dbInstance = req.app.get('db')    
    // const {cart_id, total, product_id, quantity } = req.body
    // const { cart_id } = req.params
    const {product_id, quantity } = req.body
    console.log(product_id, quantity )

    dbInstance.new_cart(1,product_id,quantity)
    .then(cart=>{
        res.status(200).send(cart)
    }).catch(err=>{
      console.log(err)
      res.status(500).send('Something wronk with add to cart')
    })
  },
    


  
    updateCart: (req, res) => {
    const dbInstance = req.app.get('db')     
    const { cart_id } = req.params
    const {total, product_id, quantity } = req.body
 

    dbInstance.update_cart(cart_id,product_id,quantity,total)
    .then(cart=>{
        res.status(200).send(cart)
    })

},

  emptyCart: (req, res) => {
    const dbInstance = req.app.get('db')     
    const { cart_id } = req.params

    dbInstance.empty_cart(cart_id)
    .then(cart=>{
        res.status(200).send(cart)
    })
  },
}