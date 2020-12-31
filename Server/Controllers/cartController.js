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
    const {cart_id, total, product_id, quantity } = req.body

    dbInstance.new_cart(cart_id,product_id,quantity,total)
    .then(cart=>{
        res.status(200).send(cart)
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