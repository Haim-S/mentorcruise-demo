
const User = require("../models/user.model");


exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find({role:"ENTREPRENEUR"});
        res.status(200).json({
            success: true,
            data: users
        })
    } catch (error) {
        res.send(error);
    }
}


exports.updateOne = async(req, res, next) =>{
    try {
        // const rating = req.body.rating;
        console.log(req.body)
        const {id} = req.params;
        const userById = await User.findByIdAndUpdate( id, req.body,{
            returnDocument: "after",
        });
        

        res.status(200).json({
            success: true,
            update: await User.findById(id),
        })



    } catch (error) {
        
    }
}

exports.getOneUser = async(id, req, res, next)=>{
    try {
        // console.log()
        const userById = await User.findById(id.userId);
        console.log(userById)
        res.send({
            user: userById
        });
    } catch (error) {
        res.send(error);
    }
}

exports.PostOneUser = async(req, res) => {
    try {
        const userById = await User.findById(id.userId);
        console.log(userById)
        res.send({
            user: userById
        });
    } catch (error) {
        res.send(error);
    }
}