import jwt from "jsonwebtoken";
import { prisma } from "../server.js";

const requireAuth = async (req,res,next) => {
    const token = req.cookies.jwt

    try{
       const {contact} = jwt.verify(token, process.env.SECRET)
       req.user = await prisma.medical_professional.findUniqueOrThrow({
        where:{
            email: contact,
        }
       });
       next()
    }catch(error){
        res.status(401).json({error:"request not authorised"})
    }

}

export default requireAuth;