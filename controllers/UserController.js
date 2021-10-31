import User from "../models/User.js";

const UserController = {
  findUserByUsername(name) {
    return User.findOne({ username: name }).exec();
  },
  findUserById(id) {
    return User.findById(id).exec();
  },
  createUser(userData) {
    let userStatus;
    User.countDocuments({ username: userData.username }, (err, count) => {
      if (err) throw err;
      if (count >= 1) userStatus = 0;
      else {
        User.create(userData, (err, small) => {
          if (err) {
            console.log(`User create didn't work... ${err}`);
          } else {
            userStatus = 1;
          }
        });
      }
    });
    return userStatus ? "User created successfully!" : "User already exists";
  },
};

export default UserController;
