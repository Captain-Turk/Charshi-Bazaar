require('dotenv').config()
const express = require('express')
const massive = require('massive')

const productCtrl = require('./Controllers/productController') 
const cartCtrl= require('./Controllers/cartController')
const orderCtrl = require('./Controllers/orderController' )
const categoryCtrl = require('./Controllers/categoryController')

const {SERVER_PORT, CONNECTION_STRING} = process.env

const app = express()

app.use(express.json())

app.get('/api/categories', categoryCtrl.getCategoryList)

app.get('/api/products', productCtrl.getAllProducts)
app.get('/api/products/:product_id', productCtrl.getOneProduct)
app.get('/api/products/:category_id',productCtrl.getProductsByCategory)


app.get('/api/cart', cartCtrl.getCart)
app.post('/api/cart', cartCtrl.newCart)
app.put('/api/cart/:cart_id', cartCtrl.updateCart)
app.delete('/api/cart/:cart_id', cartCtrl.emptyCart)
// app.delete('/api/cart', cartCtrl.checkout)

app.get('/api/orders', orderCtrl.checkOrders)
app.get('/api/orders/:order_id', orderCtrl.showOrder)
app.post('/api/orders', orderCtrl.checkOut)






massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false }
}).then(dbInstance => {
    app.set('db', dbInstance)
    console.log('DB Ready')    
}).catch(err=>console.log(err))

app.listen(SERVER_PORT, ()=> console.log(`Server listenting on port ${SERVER_PORT}`));