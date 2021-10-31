import User from "../models/User.js";

const UserController = {
  findUserByUsername(name) {
    return User.findOne({ username: name }).exec();
  },
  findUserById(id) {
    return User.findById(id).exec();
  },
  createUser(userData) {
    console.log(userData);
    return User.create(userData, (err, small) => {
      if (err) console.log(`User create didn't work... ${err}`);
    });
  },
};

export default UserController;
