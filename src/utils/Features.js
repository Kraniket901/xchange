import mongoose from "mongoose";
import jwt from 'jsonwebtoken'
import { serialize } from "cookie";
import {User} from '../models/user';
import nodeMailer from 'nodemailer'
import cloudinary from 'cloudinary'
 
export const connectDB = async () => {
  console.log(process.env.MONGO_URI);
  const { connection } = await mongoose.connect(process.env.MONGO_URI, {
    dbName: "Ads12",
  });
  console.log(`Database Connected on ${connection.host}`);
};
export const generateToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET);
};

export const verifytoken=(email,password)=>{
  return jwt.sign({email,password},process.env.JWT_SECRET);
}

export const resettoken=(email,password)=>{
  return jwt.sign({email,password},process.env.JWT_SECRET);
}


export const authfunction=(req,res,next)=>{
  const val=req.headers.authorization;
  if(val){
      const token=val.split(' ')[1];
      jwt.verify(token,SECRET,(err,user)=>{
          if(err){
              return res.status(403);
          }
          else{
              req.user=user;
              next();
          }
      })
  }
  else{
      res.status(401);
  }
}


export const cookieSetter = (res, token, set) => {
  if (set) {
  } else {
  }
};

//Auth

export const checkAuth = async (req) => {
  const val=req.headers.authorization;
  const token=val.split(' ')[1];
  console.log(token);
  if (!token) return null;
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return await User.findById(decoded._id);
};

// send mail
 
export const sendEmail = async ({email,emailtype,subject,message}) => {
  const transporter = nodeMailer.createTransport({
    host: process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASSWORD,
    },
  });
  const mailOptions = {
    from: process.env.FROM_MAIL,
    to: email,
    subject: subject,
    html: message,
  };

  const res=await transporter.sendMail(mailOptions);

}; 
