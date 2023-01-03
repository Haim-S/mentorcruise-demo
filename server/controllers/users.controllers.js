
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
        
        const {id} = req.params;
        const userById = await User.findByIdAndUpdate(id, req.body,{
            returnDocument: "after",
        });

        res.status(200).json({
            success: true,
            update: userById,
        })



    } catch (error) {
        
    }
}