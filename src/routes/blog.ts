import express from "express";
import {
  createBlog,
  getBlog,
  updateBlog,
  deleteBlog,
} from "../controllers/RootController/BlogController";
import { verifyJwt } from "../middlewares/verifyJWT";

const router = express.Router();

// ! isi file disini
router.post("/", verifyJwt, createBlog);
router.get("/", getBlog);
router.put("/:blogId", verifyJwt, updateBlog);
router.delete("/:blogId", verifyJwt, deleteBlog);

export default router;
