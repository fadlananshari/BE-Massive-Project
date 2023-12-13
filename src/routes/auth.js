import express from "express"
import auth from "../controllers/auth.js"

const router = express.Router()

router.post("/login", auth.loginUser)
router.get("/decode-token/:token", auth.decodeToken)
// routes.post("/login-admin", auth.loginAdmin)

export default router