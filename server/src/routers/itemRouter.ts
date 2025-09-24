import express from "express";
import { ItemController } from "../controllers/itemController";

const itemRoutes = express.Router();
const controller = new ItemController();

itemRoutes.get("/items", controller.getItems);

export default itemRoutes;