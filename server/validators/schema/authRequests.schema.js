const yup = require("yup");
const passwordRegex = require("../../constants/regex.constants");

const loginRequestSchema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required().matches(passwordRegex),
});

module.exports = {loginRequestSchema};