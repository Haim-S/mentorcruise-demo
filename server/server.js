require("dotenv/config");
const cors = require("cors");
const express = require("express");
const cookieParser = require("cookie-parser");
const router = require("./routes/export.routes");
const errorHandler = require("./error/errorHandler");
const app = express();


const {createServer} = require("http");
const {Server} = require("socket.io");
const httpServer = createServer(app);


// All things that belong to Middleware

app.use(cookieParser());
app.use(cors({origin: "*"}));
app.use(express.json());
app.use(router);
app.use(errorHandler);
// app.use(express.urlencoded({extended: true}));


// All things that belong to socket
const socketMain = require("./socket.io/socketMain");
const io = new Server(httpServer,{
    cors:{
        origin: "http://localhost:3000",
    }
});

io.on("connection", socketMain);


// All things that belong to App Server
require("./data/mongooseConnect").connectToMongoDB();
const port = process.env.PORT || 9000;
httpServer.listen(port, ()=>{
    console.log(`server run on port ${port}`)
});
