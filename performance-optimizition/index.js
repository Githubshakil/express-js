const express = require('express')
const app = express()
const morgan = require('morgan')
const winston = require('winston')
const NodeCache = require( "node-cache" );

const port = process.env.PORT || 3000


const cache = new NodeCache({stdTTL: 100, checkperiod: 120 });

//middleware

const cacheMiddleware = (req,res,next) =>{
    const key = req.originalUrl
const cacheData = cache.get(key)

if (cacheData) {
    console.log("Data cached successfully")
    return res.json(cacheData)
}

console.log("First time request, so no caches")
next()
}

app.use(morgan("dev"))

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
 
  transports: [
  
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
   
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

app.get('/', (req, res) => {
    logger.info("From root route")
  res.send('Performance Optimizition Module')
})

// caching a route

app.get("/data",cacheMiddleware ,(req,res)=>{
    const userData= {
        name: "shakil",
        age: 40,
        email:"shakilmahmud007@gmail.com"
    }

    //set the cache to store to temp memory

    cache.set(req.originalUrl, userData)
    res.json(userData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

logger.info("server started successfully")
logger.error("server failed")