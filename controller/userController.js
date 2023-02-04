//register login logout functions

const User=require("../models/userModel");

exports.loginUser = async (req, res,next) => {
    console.log(req.body,"dfdsfdsfdsf");
    const { email, password } = req.body;
  
    /// Checking if User has given password and email both
    // if (!email || !password) {
    //   return {
    //     message:"Something went wrong!"
    //   }
    // //   next(new ErrorHander("Please Enter email and password", 400));
    // }
    // const user = await User.findOne({ email }).select("+password");
    // if (!user) {
    //   return{
    //     message:"Something went wrong!"
    //   } 
    // //   next(new ErrorHander("Invaild email and password", 401));
    // }
  
    // const isPasswordMatch = user.comparePassword(password);
  
    // if (!isPasswordMatch) {
    //   return {
    //     message:"Something went wrong!"
    //   }
    // //   next(new ErrorHander("Invaild email and password", 401));
    // }
  
    // // sendToken(user, 200, res);
    // const token = user.getJWTToken();
    res.status(200) 
    .json({
      success: true,
    //   user,  
    //   token,
    });
  };
