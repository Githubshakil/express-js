const {createLogger, transport, format} = require('winston')

const logger = createLogger({
    level: 'error',
    format : format.combine(format.timestamp(), format.json()),
    transports:[
        new transport.file({filename: "error.log"}),
        new transport.Console()
    ]
})

module.exports = logger