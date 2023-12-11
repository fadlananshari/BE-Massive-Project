import express from "express"
import auth from "../controllers/auth.js"

const router = express.Router()

router.post("/login", auth.loginUser)
// routes.post("/login-admin", auth.loginAdmin)

export default router