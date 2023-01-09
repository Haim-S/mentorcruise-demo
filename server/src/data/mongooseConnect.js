

const mongoose = require("mongoose");

const mongoConfig={
    base_url: process.env.MONGO_URL,
    number_local: process.env.NUMBER_LOCAL,
    folder_mongo: process.env.FOLDER_MONGO,
};

const url = mongoConfig.base_url
.replace("<number-local>", mongoConfig.number_local)
.replace("<folder-mongo>", mongoConfig.folder_mongo);


exports.connectToMongoDB = async ()=> {
    try {
        mongoose.set('strictQuery', false);
        mongoose.connect(url)
        console.log('Connect to mongo DB')
    } catch (error) {
        console.log('Failed to connect with mongo')
    }
}

