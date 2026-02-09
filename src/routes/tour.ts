import { verifyJwt } from "../middlewares/verifyJWT";
import {
  getTour,
  createTour,
  deleteTour,
  updateTour,
  getTourById,
} from "../controllers/RootController/TourController";
import express from "express";

const router = express.Router();

// ! isi file here
router.get("/", getTour);
router.get("/:tourId", getTourById);
router.post("/", verifyJwt, createTour);
router.delete("/:tourId", verifyJwt, deleteTour);
router.put("/:tourId", verifyJwt, updateTour);

export default router;
