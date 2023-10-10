import express from "express"
import { Login, Register } from "../controllers/userController.js"


const userRouter = express.Router()

// SYSTEME DE CONNEXION
userRouter.post('/login', Login)
// SYSTEME D'INSCRIPTION
userRouter.post('/register', Register)

export default userRouter