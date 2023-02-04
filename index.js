const express=require("express");
const app=express();
const dotenv=require("dotenv")
app.use(express.json());
dotenv.config();

const PORT=process.env.PORT 
app.get("/",(req,res)=>{
    res.json({
        message:"hello"
    })
})


app.listen(PORT,()=>{
console.log(`server in running on ${PORT}`);
})

//https://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@github.com/AakashSoni1997/kutani_server.git
