const express = require('express')
const app = express()
const morgan = require('morgan')
const winston = require('winston')

const port = process.env.PORT || 3000

//middleware

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

logger.info("server started successfully")
logger.error("server failed")