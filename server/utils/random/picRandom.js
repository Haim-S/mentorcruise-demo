

const picUser = [
    "https://images.pexels.com/photos/4052752/pexels-photo-4052752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7422160/pexels-photo-7422160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/4061649/pexels-photo-4061649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6654178/pexels-photo-6654178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7772530/pexels-photo-7772530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7456865/pexels-photo-7456865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7781971/pexels-photo-7781971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/13417375/pexels-photo-13417375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7035597/pexels-photo-7035597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/5860514/pexels-photo-5860514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

];

exports.defaltePicUser = () => {
    return picUser[Math.floor(Math.random() * picUser.length)]
};

