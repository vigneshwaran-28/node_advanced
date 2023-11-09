const fs=require("fs");

const venus="venus.txt";
const mars="mars.txt";

//To check whether the file exists or not

//In asynchronous we use stat and access

// fs.stat(venus,(err)=>console.log((err)?"File not exists!":"File exists!"));

// fs.access("venis.txt",err=>{
//     console.log(err);
// })

fs.promises.writeFile(mars,"I'm writing asynchronous function which writes into files !");



