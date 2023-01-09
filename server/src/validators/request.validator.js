const { BabRequestError } = require("../error/Errors");


/**
 * @params {object} yup validate schema
 * @params {object} request body
 * @params {function} next function
 * least one numeric digit, one uppercase and one lowercase letter 
 */


const requestValidator = async(
    requestSchema,
    requestBody,
    nextErrorHandler
) => {

    const isValid = await requestSchema.isValid(requestBody);
    if(!isValid) nextErrorHandler(new BabRequestError());
}

module.exports = requestValidator;