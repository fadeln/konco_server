import express from "express";
import { getUser, login, logout } from "../controllers/AuthController/AuthController";

const router = express.Router();

// ! isi file here
router.post("/login", login);
router.post("/logout", logout);


router.get("/user", getUser)

export default router;
