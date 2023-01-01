
const User = require("../models/user.model");


exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            success: true,
            data: users
        })
    } catch (error) {
        res.send(error);
    }
}