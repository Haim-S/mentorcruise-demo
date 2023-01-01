const {loginRequestSchema}= require("../validators/schema/authRequests.schema")
const { requestValidator }= require("../validators/request.validator")
const User = require("../models/user.model");

const { NotFoundError, UnauthorizeError } = require("../error/Errors");
const jwtTokenService = require("../services/jwt.service");


exports.register = async (req, res) => {

    try {
        const newUser = await User.create(req.body);
 
        res.status(201).json({
            newUser: newUser._id,
            name: newUser.username,
            password: newUser.password,
    
        })  
    } catch (error) {
       res.send(error) 
    }

}

exports.login = async (req, res, next) =>{
// await requestValidator(loginRequestSchema, req.body, next);
   console.log(req.body)
const {email, password} = req.body;
const user = await User.findOne({email});
if(!user) next(new NotFoundError());
const iscorrectPassword = await user.correctPassword(password);
if(!iscorrectPassword) return next(new UnauthorizeError());
const accessToken = jwtTokenService.createAccessToken(user._id);
const refreshToken = jwtTokenService.createRefreshToken(user._id);
user.setJwtTokens(accessToken, refreshToken);
console.log(accessToken)
res.send({accessToken, refreshToken});




    // // if(!username || !password)
    // try {
    //      // 1. Find user in array. If not exist send error
    //     const user = await User.findOne({username});
    //     console.log(user)
    //     if (!user) throw new Error('User does not exist');
    //      // 2. Compare crypted password and see if it checks out. Send error if not
    //      const valid = await user.correctPassword(password);
    //      console.log(valid)
    //      if (!valid) throw new Error('Password not correct');
    //     // 3. Create Refresh- and Accesstoken
    //     const accesstoken = createAccessToken(username);
    //     const refreshtoken = createRefreshToken(username);
    //     // 4.
       
    //     await User.updateOne(user, {
    //     jwt_ac_token: accesstoken,
    //     jwt_rf_token : refreshtoken
    //     });
    //     // res.status(200).json({
    //     //     user,
            
    //     // })
    //     // 5. send token.
    //     sendRefreshToken(res, refreshtoken);
    //     sendAccessToken(res, req, accesstoken);
    // } catch (err) {
    //     res.send({
    //         error: `${err.message}`,
    //       });
    // }
}

