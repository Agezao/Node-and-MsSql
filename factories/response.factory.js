let defaultResponseObject = () => {
  return {
      success: null,
      code:    null,
      message: null,
      data:    null
  };
};

let fail = (code, errorMessage = null) => {
  var responseObject = defaultResponseObject();

  responseObject.success = false;
  responseObject.code    = code;
  responseObject.message = errorMessage;

  return responseObject;
};

let success = (responseData = null) => {
  var responseObject = defaultResponseObject();

  responseObject.success = true;
  responseObject.code    = 1;
  responseObject.data    = responseData;

  return responseObject;
};

const ResponseFactory = {
  success: success,
  fail: fail
}
  
module.exports = ResponseFactory;