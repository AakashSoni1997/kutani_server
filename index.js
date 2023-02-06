const express=require("express");
const app=express();
const dotenv=require("dotenv")
const pankajDB=require("./app/database/database")
app.use(express.json());

const PORT=process.env.PORT ||8000
dotenv.config({path:"./app/config/.env"})

pankajDB()



//Route Import
const user=require("./routes/userRoute")
const home=require("./routes/homeRoute")


app.use("/api/v1",user)
app.use("/api/v1",home)







app.listen(PORT,()=>{
console.log(`server in running on ${PORT}`);
})

//https://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@github.com/AakashSoni1997/kutani_server.git
