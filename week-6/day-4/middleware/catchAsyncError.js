const catchAsyncError = (callback) => {
  return (req, res, errorCallback) => {
    return Promise.resolve(callback(req, res, errorCallback)).catch(
      errorCallback
    );
  };
};

// const tryHandler=async(cb)=>{
//     try{
//         return await cb();
//     } catch(error) {
//         return error
//     }
// }

module.exports = catchAsyncError;
