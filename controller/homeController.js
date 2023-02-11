const Home = require("../models/homeModel");

//post Image api
exports.homeController = async (req, res, next) => {
  let images = [];
  // console.log(images,"homepage");
  if (typeof req.body.image === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  const home = await Home.create({
    images,
  });
  // console.log(images,"homepage")
  res
    .status(201)
    .json({ success: true, message: "successfully create Image", home });
};

//get all Iamge
exports.getAllImage = async (req, res, next) => {
  const { image } = req.body;
  const getImage = await Home.find(image);

  res.status(200).json({ success: true, message: "get Images", getImage });
};

//delete image

exports.deleteImage = async (req, res, next) => {
  const images=await Home.findById(req.params.id)
  console.log("found Image",images)
  if(!images){
    return "iamge not Found"
  }else{
    await images.remove()
  }
res.status(200).json({
  success:true,
  message:"Image delete Successfully",
  images
})

};
