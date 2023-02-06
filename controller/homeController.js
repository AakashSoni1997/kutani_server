const Home=require("../models/homeModel");

exports.homeController=async(req,res,next)=>{
    let images=[]
    // console.log(images,"homepage");
    if (typeof req.body.image === "string") {
        images.push(req.body.images);
      } else {
        images = req.body.image;
      }

    const home=await Home.create({
        images
    })
res.status(201).json({success:true,home})
}
