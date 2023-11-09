const express=require("express");

const bcrypt=require("bcrypt");

const app=express();

app.use(express.json());

const users=[];
 
app.get('/users',(req,res)=>{
    res.json(users);
});

app.post('/users',async (req,res)=>{
    try {
        const salt=await bcrypt.genSalt();
        const hashPassword=await bcrypt.hash(req.body.password,salt);
        // console.log(salt);
        // console.log(hashPassword-salt);
        const user={
            name:req.body.name,
            password:hashPassword
        };
        users.push(user);
        res.status(201).send("done");
    } catch (error) {
        res.status(500);
    }
});

app.post('/users/login',async(req,res)=>{
    const user=users.find(user=>user.name=req.body.name);
    if(user==null)
        res.send("Error ");
    try {
        if(await bcrypt.compare(req.body.password,user.password))
            res.send("suceess");
        else
            res.send("Invalid");
    } catch (error) {
        res.send("Error caused");
    }
}); 
    
app.listen(3000);
