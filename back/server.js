import express from "express";
import cors from "cors"
import session from "express-session";
import teaRouter from "./routers/teaRouter.js";
import { connectDB } from "./config/database.js";
import categoryRouter from "./routers/categoryRouter.js";
import userRouter from "./routers/userRouter.js";
import orderRouter from "./routers/orderRouter.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Credentials à true, permet à ce que mon serveur envoie la session/cookie à REACT
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))

connectDB

// Initialisation de la session
app.use(session({
    name: "user",
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 3_600_000 // 1000 * 60 * 60 // 1 Heure
    }
}))


app.use(teaRouter)
app.use(categoryRouter)
app.use(userRouter)
app.use(orderRouter)



app.listen(process.env.PORT, () =>{
    console.log(`Le serveur est exécuté sur: ${process.env.BASE_URL}`)
})