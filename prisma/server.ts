import { PrismaClient } from "@prisma/client";
import express from 'express';

const client=new PrismaClient();
const app=express();

app.get('/',async(req,res)=>{
    const data=req.body;
    try {
        
    } catch (error) {
        
    }
});


