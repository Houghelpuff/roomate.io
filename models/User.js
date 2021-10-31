import mongoose from "mongoose";
import bc from "bcryptjs";

let UserSchema = mongoose.Schema({
  username: String,
  password: String,
  fName: String,
  lName: String,
  colorScheme: String,
});

UserSchema.pre("save", function (next) {
  const user = this;

  if (this.isModified("password") || this.isNew) {
    bc.genSalt(10, (saltErr, salt) => {
      if (saltErr) return next(saltErr);
      else {
        bc.hash(user.password, salt, (hashErr, hash) => {
          if (hashErr) return next(hashErr);
          user.password = hash;
          next();
        });
      }
    });
  } else {
    return next();
  }
});

UserSchema.methods.comparePassword = (password, callback) => {
  bc.compare(password, this.password, (err, isMatch) => {
    if (err) callback(err);
    else callback(null, isMatch);
  });
};

export default mongoose.model("User", UserSchema);
