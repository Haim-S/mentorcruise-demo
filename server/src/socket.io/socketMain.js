
const users = {};



function socketMain(socket) {


socket.on('join', (username) => {
    console.log(username)
});

socket.on('send-message', (message)=>{
    console.log(message)
})

}

module.exports = socketMain;