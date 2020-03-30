const cuid = require('cuid')

const generateId = (req, res, next) => {
  const id = cuid()
  res.id = id
  next()
}

module.exports = {
  generateId
}
