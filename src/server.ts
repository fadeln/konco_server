import express from "express";

import cors from "cors";
import dotenv from "dotenv";

import authRouter from "./routes/auth";
import blogRouter from "./routes/blog";
import carRouter from "./routes/car";
import tourRouter from "./routes/tour";
import wisataRouter from "./routes/wisata";

import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

dotenv.config();
// import { port } from "./config/db.config";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173","https://koncohiling.vercel.app"],
    credentials: true,
  }),
);

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/auth", authRouter);
app.use("/api/blog", blogRouter);
app.use("/api/car", carRouter);
app.use("/api/tour", tourRouter);
app.use("/api/wisata", wisataRouter);

app.listen(port, () => {
  console.log(`Server is running on ${port} `);
});
