import express from "express";
import { configDotenv } from "dotenv";
import cors from "cors";
import { PrismaClient } from '@prisma/client'
import cookieParser from "cookie-parser";
import User from "./routes/userRoutes.js";
import Professional from "./routes/professionalRoutes.js";
import Auth from "./routes/authRoutes.js";
configDotenv();
const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use((req,res,next)=>{
    console.log(req.method," ",req.path);
    next();
});

app.listen(process.env.PORT,()=>{
    console.log("Server Running on Port ",process.env.PORT);
})

export {prisma};

app.use("/api/user/",User);
app.use("/api/professional/",Professional);
app.use("/api/auth/",Auth);