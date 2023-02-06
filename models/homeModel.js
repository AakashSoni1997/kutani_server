const mongoose=require("mongoose")

const homeSchema=new mongoose.Schema({
      images: [
        {
          image: {
            type: String,
            required: true,
          },
        },
      ],
      createdAt: {
        type: Date,  
        default: Date.now,
      },
    });
    

    module.exports= mongoose.model("Home", homeSchema);