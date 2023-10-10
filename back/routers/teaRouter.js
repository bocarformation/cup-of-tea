import express from "express";
import { GetBestTea, GetLastTea, GetOneTea, GetTeas } from "../controllers/teaController.js";

const teaRouter = express.Router();

// RECUPERER TOUS LES THES
teaRouter.get("/teas", GetTeas)

// RECUPERER LE DERNIER THE INSERE EN BDD
teaRouter.get("/last-tea", GetLastTea)

// RECUPERER LE THE AVEC LE PLUS DE VENTES
teaRouter.get("/best-tea", GetBestTea)

// RECUPERER UN SEUL THE THE
teaRouter.get("/tea/:id", GetOneTea)

export default teaRouter