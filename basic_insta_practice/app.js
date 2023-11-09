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

const bcrypt=require("bcrypt");

app.get('/',(req,res)=>{
    res.json("Heelo");
});

app.post("/signup",async(req,res)=>{
    let username=req.body.username;
    let password=req.body.password;
    pool.query("select * from insta where username=?",[username],async(err,result)=>{
        if(err)
            return res.send("byee");
        if(result.length){
            console.log("Invalid data!");
            return res.send("Invalid"); 
        }
        else{ 
            let hashPassword=await bcrypt.hash(password,5);
            pool.query(`insert into insta values(?,?)`,[username,hashPassword],(err,res)=>{
                if(err)
                    return console.log("Error Found !");
                return console.log("SuccessFully Inserted !");
            });
            res.send("hi");
        }
    });

   
});

app.post("/login",async(req,res)=>{
    let username=req.body.username;
    let password=req.body.password;
    pool.query("select * from insta where username=?",[username],async(err,result)=>{
        if(err)
            return res.send("byee");
        else{
            if(await bcrypt.compare(password,result[0].password)){
                console.log("Login Successful!");
                return res.send("Login Successful!");
            }
             console.log("Failure");
             return res.send("Failure!");
        }     
    });
});


app.listen(3000);



