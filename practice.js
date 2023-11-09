// const fs = require('fs');

// function someAsyncOperation(callback) {
//   // Assume this takes 95ms to complete
//   fs.readFile('/path/to/file', callback);
// }

// const timeoutScheduled = Date.now();

// setTimeout(() => {
//   const delay = Date.now() - timeoutScheduled;

//   console.log(`${delay}ms have passed since I was scheduled`);
// }, 100);

// // do someAsyncOperation which takes 95 ms to complete
// someAsyncOperation(() => {
//   const startCallback = Date.now();

//   // do something that will take 10ms...
//   while (Date.now() - startCallback < 10) {
//     // do nothing
//   }
// });

// setTimeout(()=>console.log('T1'),600)
// setTimeout(()=>console.log('T2'),500)

// process.nextTick(()=>{
//     console.log('"hi1"');
//         process.nextTick(()=>{
//          console.log('"hi2"');
//     })
// })
// process.nextTick(()=>console.log('"hi3"'))

// Promise.resolve().then(data=>console.log('hi4'))

// Promise.resolve().then((data)=>{
//     console.log('hi5')
//     process.nextTick(()=>{
//          console.log('hi6')
//     })
// })

// Promise.resolve().then(data=>console.log('hi7'))


// let fs=require('fs');
// fs.readFile(__filename,()=>console.log("file"))

// setTimeout(()=>console.log("setTimeout"),0)

// let obj={
//     name:"vignesh",
//     pass:"v"
// };

// let num="9876543210";

// let res=num.replaceAll("[0-9]","");

// console.log(res);

// let b=undefined;
// if([])
// console.log("h");
  

const express = require("express");
const routes = require("./routes/auth");
require('dotenv').config({path:"./.env"});

const app = express();

app.use(express.json());
app.use(routes);

const port = process.env.PORT;
app.listen(port);

