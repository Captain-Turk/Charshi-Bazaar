require('dotenv').config()
const express = require('express')
const massive = require('massive')

const productCtrl = require('./Controllers/productController') 
const cartCtrl= require('./Controllers/cartController')

const {SERVER_PORT, CONNECTION_STRING} = process.env

const app = express()

app.use(express.json())

app.get('/api/products', productCtrl.getAllProducts)
app.get('/api/products/:product_id', productCtrl.getOneProduct)


app.get('/api/cart', cartCtrl.getCart)
app.post('/api/cart', cartCtrl.addToCart)
app.put('/api/cart/:cart_id', cartCtrl.changeQuantity)
app.delete('/api/cart/:cart_id', cartCtrl.removeFromCart)
app.delete('/api/cart', cartCtrl.checkout)


massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false }
}).then(dbInstance => {
    app.set('db', dbInstance)
    console.log('DB Ready')    
}).catch(err=>console.log(err))

app.listen(SERVER_PORT, ()=> console.log(`Server listenting on port ${SERVER_PORT}`));