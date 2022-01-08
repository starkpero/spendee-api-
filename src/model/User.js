const mongoose = require('mongoose'); 
const bcrypt = require('bcryptjs');


//schema
const userSchema = mongoose.Schema(
    {
      firstname: {
        required: [true, "First name is required"],
        type: String,
      },
      lastname: {
        required: [true, "Last name is required"],
        type: String,
      },
      email: {
        required: [true, "Email name is required"],
        type: String,
      },
      password: {
        required: [true, "Pasword name is required"],
        type: String,
      },
      isAdmin: {
        type: Boolean,
        default: false,
      },
    },
    {
      toObject: {
        virtuals: true,
      },
      toJSON: {
        virtuals: true,
      },
      timestamp: true,
    }
  );

//hashing passwords
userSchema.pre('save', async function(next){
    //if the password is modified then move it to next middleware
    if(!this.isModified('password')){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});



//compile schema into model
const User = mongoose.model('User', userSchema);


module.exports = User;