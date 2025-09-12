const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const path = require('path')
//middleware to serve static files
app.use(express.static(path.join(process.cwd(), 'public')))

//configuure template engine
app.set('view engine', 'ejs')
app.set('views', path.join(process.cwd(), 'views'))

//sample product data
const products = [
  { id: 1, name: 'laptop', description: 'A high performance laptop', price: 1000 },
  { id: 2, name: 'smartphone', description: 'A latest model smartphone', price: 800 },
  { id: 3, name: 'tablet', description: 'A lightweight tablet', price: 600 },
]

app.get('/', (req, res) => {
  res.render('index',{title: "Product List", products})
})


//Dynamic route for product details
app.get('/product/:id', (req, res) => {
  const productId = req.params.id
  const product = products.find(product => product.id === parseInt(productId))
  if (!product) {
    return res.status(404).send('Product not found')
  }
  res.render('product', {product})
  console.log(product)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
