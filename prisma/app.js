import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));



app.listen(3000);
