import rescue from "express-rescue";

export default [
  (req, res, next) => {
    // Validation here
    next()
  },
  rescue(async (req, res) => {
    res.json(
      res.setData({
        test: true
      })
    )
  }),
  (error, req, res, next) => {
    // Catch all error here
    console.error(error)
    res.json(
      res.setErrorMessage(error.message)
    )
  }
]
