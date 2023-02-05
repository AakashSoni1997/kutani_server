const User = require("../models/userModel");

exports.registerUser = (async(req, res) => {
  const { name, email, password } = req.body;

  const user =await User.create({
    name,
    email,
    password,
    avatar: {
      public_id:"this is sample id",
      url: "this is sample url",
    },
  });

  res.status(201).json({message:"registersuccfully",user})
});

// login Controler
exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  // Checking if User has given password and email both
  if (!email || !password) {
    return res.status(400).json({
      message:"please fill email and password !"
    }) 
    
  // //   next(new ErrorHander("Please Enter email and password", 400));
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return res.status(400).json({
      message:"user not exists ! please signup first "
    }) 
  //   next(new ErrorHander("Invaild email and password", 401));
  }

  const isPasswordMatch = user.comparePassword(password);

  if (!isPasswordMatch) {
    return res.status(400).json({
      message:"password does not matched !"
    }) 
  //   next(new ErrorHander("Invaild email and password", 401));
  }

  // // sendToken(user, 200, res);
  const token = user.getJWTToken();
  res.status(200).json({
    success: true,
      user,
      token,
  });
};
