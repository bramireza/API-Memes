export const ErrorResponse = (res, status = 500, errorMessage =  "Internal server error") => {
  res
    .status(status)
    .json({
      data   : null,
      error  : errorMessage,
      success: false
    });
}