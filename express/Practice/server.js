  const express=require("express");

  const app=express();

  app.set("view engine","ejs");

  app.get("/",(req,res)=>{
    console.log("her");
    // res.download("server.js");
    // res.download("package.json");
    // res.send("Hi");
    
    res.render("index");
});

app.get("/users",(req,res)=>{
  res.send("Users data!");
});
app.get("/users/info",(req,res)=>{
  res.send("Users Information !");
});

  app.listen(3000);
  