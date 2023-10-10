import express from "express";
import { AddOrder, GetOneOrder, GetOrders, GetOrdersByUser } from "../controllers/orderController.js";


const orderRouter = express.Router();


// AJOUTER UNE COMMANDE
orderRouter.post("/new-order",AddOrder)

// RECUPERER TOUTES LES COMMANDES
orderRouter.get("/orders",GetOrders)

// RECUPERER TOUTES LES COMMANDES D'UN UTILISATEUR
orderRouter.get("/orders-user",GetOrdersByUser)

// RECUPERER UNE COMMANDE EN PARTICULIER
orderRouter.get("/order/:id", GetOneOrder)

export default orderRouter;