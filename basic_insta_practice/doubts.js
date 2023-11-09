const {createPool}=require("mysql");
const express=require("express");
const app=express();
const pool=createPool({
    host:"localhost",
    user:"root",
    password:"Vignesh@2858",
    database:"vignesh",
    connectionLimit:10
});
app.use(express.json());
// pool.query("select * from demo",(err,res)=>{
//     if(err)
//         return console.log("eroor !");
//     return console.log(res);
// });

const bcrypt=require("bcrypt");

app.get('/',(req,res)=>{
    res.json("Heelo");
});
getUser

app.post("/signup",async(req,res)=>{
    let username=req.body.username;
    let password=req.body.password;
    let result = await pool.query("select * from insta where username=?",[username]); 
    console.log("res",result);
    if(result.length) 
       return res.send("Invalid Username");
    let hashPassword=await bcrypt.hash(password,5);
    pool.query(`insert into insta values(?,?)`,[username,hashPassword],(err,res)=>{
        if(err)
            return console.log("Error Found !");
        return console.log("SuccessFully Inserted !");
    });
    res.send("hi");
});

app.post("/login",async(req,res)=>{
    let username=req.body.username;
    let password=req.body.password;
    let databasePassword;
    pool.query("select * from insta where username=?",[username],(err,resu)=>{
        if(err)
            return res.send("byee");
        databasePassword=resu;
    });
    console.log("data",databasePassword);
    if(await bcrypt.compare(password,databasePassword)){
        return console.log("Login Successful!");
    }
    return console.log("Failure");
});


app.listen(3000);



