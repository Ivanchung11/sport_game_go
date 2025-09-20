import express from "express";
// import { AuthService } from "../services/AuthService";
import { UserController } from "../controllers/userController";

const userRoutes = express.Router();
const controller = new UserController();

userRoutes.post("/login", controller.login);
userRoutes.post("/register", controller.register);

export default userRoutes;
