import {createPool} from "mysql";

const pool=createPool({
    host:"localhost",
    user:"root",
    password:"Vignesh@2858",
    database:"vignesh",
    connectionLimit:10
});

pool.query("select * from demo",(err,res)=>{
    if(err)
        return console.log("eroor !");
    return console.log(res);
});


