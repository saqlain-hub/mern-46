const handleError = (err, req, res, next) => {
  console.log("in error", err);
  err.statusCode = err.statusCode || 500;
  if (
    process.env.MODE.toLocaleLowerCase() === "DEVELOPMENT".toLocaleLowerCase()
  )
    res.status(err.statusCode).json({
      success: false,
      errMessage: err.message,
      stack: err.stack,
      error: err,
    });
  else
    res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
};

module.exports = handleError;
