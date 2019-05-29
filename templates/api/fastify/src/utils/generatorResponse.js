const base = {
  response: {
    statusCode: 200,
    message: null,
    error: false,
    version: process.env.VERSION || '0.0.0'
  },
  data: []
}

/**
 * Build response base by plugin
 */
module.exports = (data, message, code, error) => {
  const baseT = { ...base }
  baseT.data = data
  baseT.response.message = message
  baseT.response.statusCode = code
  baseT.response.error = error

  return baseT
}
