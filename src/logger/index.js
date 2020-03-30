const { createLogger, format, transports } = require('winston')

module.exports = createLogger({
  format: format.combine(
    format.colorize(),
    format.timestamp({
      format: 'DD/MM/YYYY HH:mm:ss.SSS'
    }),
    format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  transports: [
    new transports.Console({
      level: 'debug',
      handleExceptions: true,
      json: false,
      colorize: true
    }),
    new transports.File({
      level: 'info',
      filename: './logs/all-logs.log',
      handleExceptions: true,
      json: true,
      maxsize: 5242880, //5MB
      maxFiles: 5,
      colorize: false
    })
  ],
  exitOnError: false
})
