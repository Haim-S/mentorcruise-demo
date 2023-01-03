const {Schema, model} = require("mongoose");
const {hash, compare} = require("bcrypt");
const SALT = 10;
const {emailRegex} = require("../constants/regex.constants");
// const isPasswordValid = require("../validators/password.validator");
const { USER_ROLE, EXPERTISE} = require("../constants/user.constants");
const {defaltePicUser} = require("../utils/random/picRandom");
const {defalteWorkExperience, defalteAboutyou} = require("../utils/random/sentencesRandom");
const userSchema = new Schema({
email: {
        type: String,
        unique: [true, "Email already exist."],
        required: true,
        validate: {validator: emailRegex}
    },
firstName: {
            type: String,
            required: true,
          },
lastName: {
            type: String,
            required: true},
password: {type:String, required: true},
confirmPassword: {type:String, required: true},
role: {
            type: [String],
            enum: Object.values(USER_ROLE),
            default: USER_ROLE.ENTREPRENEUR,
            required: true},
linksView: {
                linkdinURL: String,
                facebookURL: String,
                instagramURL: String,
                gitHubURL: String,
              },
expertise: {
                type: [String],
                enum: Object.values(EXPERTISE),
                default: [EXPERTISE.FULLSTACK_DEVELOPER],
              },
phoneNumber: String,
AvailabilityByPhone: Number,
about: {type: String, default: defalteAboutyou},
WorkExperience: {type: String, default:defalteWorkExperience},
rating: {type:Number, default: 2},
imgSRC: {type:String, default: defaltePicUser},

jwt_ac_token: {type: String},
jwt_rf_token: {type: String},
});

userSchema.pre("save", async function (next) {
    this.password = await hash(this.password, SALT);
    next();
});


userSchema.methods.correctPassword = async function (password) {
    const isMatch =  compare(password, this.password);
    return isMatch;
};

userSchema.methods.setJwtTokens = function (accessToken, refreshToken) {
    this.jwt_ac_token = accessToken;
    this.jwt_rf_token = refreshToken;
    this.save();
}

userSchema.methods.setAccessToken = function (accessToken) {
    this.jwt_ac_token = accessToken;
    this.save();
};



const User = model("User", userSchema);

module.exports = User;