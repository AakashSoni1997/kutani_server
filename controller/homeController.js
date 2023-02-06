const Home=require("../models/homeModel");

exports.homeController=async(req,res,next)=>{
    let images=[]

    // console.log(images,"homepage");
    if (typeof req.body.image === "string") {
        images.push(req.body.images);
      } else {
        images = req.body.images;
      }

    const home=await Home.create({
        images
    })
    console.log(images,"homepage")
res.status(201).json({success:true,home})
}
