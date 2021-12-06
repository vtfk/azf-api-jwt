const generate = require('../lib/generate-jwt')
const response = require('../lib/get-response-object')

module.exports = async function (context, req) {
  if (!req.body) {
    context.log.error('Missing required body')
    return response({ error: 'Missing required body' }, 400)
  }

  const { system, version, payload, expiration, issuer, secret } = req.body
  if (!system) {
    context.log.warn('Using predefined \'system\'')
  }
  if (!version) {
    context.log.warn('Using predefined \'version\'')
  }
  if (!expiration) {
    context.log.warn('Using predefined \'expiration\'')
  }
  if (!issuer) {
    context.log.warn('Using predefined \'issuer\'')
  }
  if (!secret) {
    context.log.warn('Missing required parameter \'secret\'')
    return response({ error: 'Missing required parameter \'secret\'' }, 400)
  }

  return response({
    jwt: generate(system, version, payload, expiration, issuer, secret)
  })
}
