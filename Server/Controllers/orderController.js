module.exports = {
    checkOut: (req, res) => {
      const dbInstance = req.app.get('db')
      const {order_id} = req.params
      const {cart_id, customer_name, customer_address, order_date_time, total} = req.body
      dbInstance.check_out( order_id, cart_id, customer_name, customer_address, order_date_time, total)
      .then(order =>{
        res.status(200).send(order)
      })
      .catch(err=> { 
        console.log(err)
        res.status(500).send('Something went wrong while cheking out!')
       
    })
         
    },
    
    checkOrders: (req, res) => {
        const dbInstance = req.app.get('db')
        dbInstance.check_orders()
        .then(orders =>{
          res.status(200).send(orders)
        })
        .catch(err=> { 
            console.log(err)
            res.status(500).send('Something went wrong, unable to show the orders!!!')
           
        })
     
    },

    showOrder: (req,res ) => {
        const dbInstance = req.app.get('db')
        const {order_id} = req.params

        dbInstance.show_order(order_id)
        .then(order=> {
            res.status(200).send(order)
        })
        .catch(err=> { 
            console.log(err)
            res.status(500).send('Unable to show the order!')
           
        })
    }

    
      
}