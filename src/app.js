const http = require('http')
const express = require('express')
const cors = require('cors')
const { generateId } = require('./../middlewares/genID')
const logger = require('./logger')

const app = express()

app.use(cors())

logger.stream = {
  write: function (message, encoding) {
    logger.debug(message)
  }
}
app.use(require('morgan')('tiny', { stream: logger.stream }))

app.get('/', generateId, (req, res) => {
  logger.info(`ID ${res.id}`)
  const response = { result: res.id }
  logger.info(`response ${response}`)
  res.json(response)
})

const server = http.createServer(app)

server.listen(3333)

server.on('listening', server => {
  logger.info(`Server listening on 3333...`)
})
