const jwt = require('jsonwebtoken')
const pkg = require('../package.json')
const config = require('../config')

module.exports = (system, version, payload = {}, expiration, issuer, secret) => {
  const jwtPayload = {
    system: system || pkg.name,
    version: version || pkg.version,
    ...payload
  }

  const options = {
    expiresIn: expiration || config.expiration,
    issuer: issuer || config.issuer
  }
  console.log('Payload:', jwtPayload)
  console.log('Options:', options)

  const token = jwt.sign(jwtPayload, secret, options)
  return token
}
