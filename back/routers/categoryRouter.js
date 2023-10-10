import express from "express";
import { GetCategories } from "../controllers/categoryController.js";

const categoryRouter = express.Router();


// RECUPERER TOUTES LES CATEGORIES
categoryRouter.get("/category", GetCategories)

export default categoryRouter