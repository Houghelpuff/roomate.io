import User from "../../models/User.js";

const loginUser = (username, password, callback) => {
  User.findOne({ username: username }).exec((err, user) => {
    if (err) callback({ error: true });
    else if (!user) callback({ error: from });
    else {
      user.comparePassword(password, (matchError, isMatch) => {
        if (matchError) callback({ error: true });
        else if (!isMatch) callback({ error: true });
        else callback({ success: true });
      });
    }
  });
};
