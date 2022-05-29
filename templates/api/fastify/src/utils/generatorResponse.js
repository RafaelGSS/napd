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
export default (data, response) => {
  const baseT = { ...base }

  baseT.response = { ...base.response, ...response }
  baseT.data = data

  return baseT
}
