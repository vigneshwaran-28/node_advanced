const express=require('express');
const multer=require('multer');
const ejs=require('ejs');
const path=require('path');
const cloudinary=require('cloudinary').v2;
const fs=require('fs');
require('dotenv').config();
// console.log(process.env.api_cloud,process.env.api_key,process.env.api_secret);
cloudinary.config({
    cloud_name:process.env.api_cloud,
    api_key:process.env.api_key,
    api_secret:process.env.api_secret
});



const storage=multer.diskStorage({
    destination:'./img',
    filename:function(req,file,cb){
        let name=file.fieldname+'_'+Date.now()+path.extname(file.originalname);
        cb(null,name);
    },
    // cloudinary
});

const upload=multer({
    storage:storage,
    limits:{fileSize:1000000},
    fileFilter:function(req,file,cb){
        checkFileType(file,cb);
    }
}).single('myImage');

function checkFileType(file,cb){
    const fileTypes=/jpeg|jpg|png/;
    
    const extname=fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType=fileTypes.test(file.mimetype);
    // console.log(file);
    if(mimeType && extname){
        return cb(null,true);
    }
    else{
        cb("Error");
    }
}

const app=express();
app.post('/',(req,res)=>console.log("hello"));
app.post('/upload',(req,res)=>{
    upload(req,res,async(err)=>{
        if(err)
            res.status(400).json({message:"Does not match!"});
        else{
        let url=await cloudinary.uploader.upload(req.file.path);
        console.log(url);
        fs.unlinkSync(req.file.path);
        }

    })
});
const port=process.env.port;
app.listen(port);   