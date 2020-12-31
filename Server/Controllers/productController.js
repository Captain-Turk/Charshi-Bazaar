module.exports = {
    getAllProducts: (req, res) => {
        const dbInstance = req.app.get('db')

        dbInstance.get_all_products()
        .then(products=> {
            res.status(200).send(products)
        })
        .catch(err=> {  
            console.log(err)         
            res.status(500).send('Something went wrong, unable to get products!!!')
            
        })       
    },
    getOneProduct: (req,res ) => {
        const dbInstance = req.app.get('db')
        const {product_id} = req.params

        dbInstance.get_one_product(product_id)
        .then(product=> {
            res.status(200).send(product)
        })
        .catch(err=> { 
            console.log(err)
            res.status(500).send('Something went wrong, unable to show the product!')
           
        })
    }
}