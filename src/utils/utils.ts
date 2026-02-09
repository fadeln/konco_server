import { access_jwt_secret } from "../config/db.config";
import jwt from "jsonwebtoken";
import { IJWTPayload } from "../types/types";
import { Request, Response } from "express";

// ! FOR FUTURE DEV, THIS IS FOR GENERATING USER.
// import { PrismaClient } from "@prisma/client";
// import bcrypt from "bcrypt";

// const prisma = new PrismaClient();
// const salt = 10;

// async function main() {
//   const hash = await bcrypt.hash("x", salt);

//   const user = await prisma.user.create({
//     data: {
//       username: "x",
//       password: hash,
//     },
//   });

//   console.log(user);
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });

export const generateAccessToken = (data: IJWTPayload) => {
  return jwt.sign(data, access_jwt_secret, { expiresIn: "1d" });
};