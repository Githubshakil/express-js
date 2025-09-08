const fs =require('fs')
const path = require('path')


const logFilePath = path.join(process.cwd(), 'logs.txt')



const activityLogger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  const logMassage = `[${timestamp} ${req.method} ${req.url}\n]`;
  console.log(logMassage);

  fs.appendFile(logFilePath,logMassage, (err)=>{
    if(err){
        console.log('Error writing a log file', err)
    }
  })

  next()
};

module.exports = activityLogger;
