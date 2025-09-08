import { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
// import nodemailer from "nodemailer";
import jwt, { JwtPayload } from "jsonwebtoken";
import { checkPassword, hashPassword } from "../utils/hash";
import { QueryResult } from "pg";
import { UserModel } from "../models/userModel";
import { log } from "console";


declare module "jsonwebtoken" {
  export interface UserIDJwtPayload extends jwt.JwtPayload {
    userId: string;
    email: string;
  }
}

dotenv.config();

export class UserController {
   login = async (req: Request, res: Response) => {
      const { email, password } = req.body;
      try {
         const user = await UserModel.getUserByEmail(email);
         if (!user) {
            return res.status(400).json({ message: "User not found" });
         }
         const isMatched = await checkPassword({ plainPassword: password, hashedPassword: user.password });
        if (!isMatched) {
            return res.status(401).json({ message: "Invalid password" });
         }
        const session = req.session;
        session.userId = user.id;

         const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET as string);
        return res.json({
            token,
            msg: "success",
            id: user.id,
            email: user.email,
            name: user.display_name,
            gender: user.gender
});
      } catch (error: any) {
         res.status(500).json({ msg: error.message });
      }
    // if (email =="test@example.com" && password == "Test User") {
    //     const token = jwt.sign({ userId: "1", email: "test@example.com" }, process.env.JWT_SECRET as string);
    //     return res.json({ token });
    // } else {
    //     return res.status(401).json({ message: "Invalid credentials" });
    // }
   }

    register = async (req: Request, res: Response, next: NextFunction) => {

        if (!req.body.email) {
            req.body.error = "Missing email";
            req.body.statusCode = 400;
            next();
        }
        const email = req.body.email;
        const checkEmail = await UserModel.getUserByEmail(email);
        if (checkEmail) {
            res.status(401).json({ msg: "account already exist!" });
            return;
        }

        const password = await hashPassword(req.body.password);
        const name = req.body.name;
        const gender = req.body.gender;
        try {
            const user = await UserModel.createUser(email, password, name, gender);
            const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET as string,{
                expiresIn: '1h'
            });
            res.json({ token });
        } catch (error: any) {
            res.status(500).json({ msg: error.message });
        }
   }
}
