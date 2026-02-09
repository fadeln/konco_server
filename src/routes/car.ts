import { verifyJwt } from "../middlewares/verifyJWT";
import { getCar, createCar, deleteCar, updateCar, getCarById } from "../controllers/RootController/CarController";
import express from "express";

const router = express.Router();

// ! isi file here
router.get("/", getCar);
router.get("/:carId", getCarById);
router.post("/", verifyJwt, createCar);
router.delete("/:carId", verifyJwt, deleteCar);
router.put("/:carId", verifyJwt, updateCar);


export default router;
