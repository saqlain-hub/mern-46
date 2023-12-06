const catchAsyncError = (callback) => {
  return (req, res, errorCallBack) => {
    return Promise.resolve(callback(req, res, errorCallBack)).catch(
      errorCallBack
    );
  };
};

// const tryHandler=async(cb)=>{
//   try{
//   return  await cb();
//   }catch(error){
//     return error
//   }
// }

module.exports = catchAsyncError;
