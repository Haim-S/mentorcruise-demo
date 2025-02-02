const JwtTokenService = require("../services/jwt.service");
const {JsonWebTokenError, TokenExpiredError } = require("jsonwebtoken");
const { UnauthorizeError } = require("../error/Errors");

const authJwtToken = (req, res, next) =>{
    try {
        const token = req.cookies.acc_token;
        //  req.headers["access-token"];
        if(!token)return res.sendStatus(401);
        JwtTokenService.verifyAccessToken(token);
        next();
    } catch (error) {
        if(error instanceof TokenExpiredError){
            console.log("first");
        }
        if(error instanceof JsonWebTokenError){
            return next(new UnauthorizeError());
        }
        
    }
}

const authUserJwt = (req, res, next) => {
    try {
        // const token = req.cookies.acc_token;
        // const token =  req.headers.authorization;
        console.log(token)
         const token = req.headers["access-token"];
        if(!token)return res.sendStatus(401);
        JwtTokenService.verifyAccessToken(token);
        next();
    } catch (error) {
        res.send(error);
    }
}

module.exports = {authJwtToken, authUserJwt};