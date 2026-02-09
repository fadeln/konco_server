import { verifyJwt } from "../middlewares/verifyJWT";
import {
  getWisata,
  createWisata,
  deleteWisata,
  updateWisata,
  getWisataById,
} from "../controllers/RootController/WisataController";
import express from "express";

const router = express.Router();

// ! isi file here
router.get("/", getWisata);
router.get("/:wisataId", getWisataById);
router.post("/", verifyJwt, createWisata);
router.delete("/:wisataId", verifyJwt, deleteWisata);
router.put("/:wisataId", verifyJwt, updateWisata);

export default router;
