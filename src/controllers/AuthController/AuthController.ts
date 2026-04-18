import prisma from "../../config/prisma";
import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { ILoginRequest } from "../../types/types";
import { generateAccessToken } from "../../utils/utils";
import jwt from "jsonwebtoken";
import { access_jwt_secret } from "../../config/db.config";

export const login = async (
  req: Request<{}, any, ILoginRequest>,
  res: Response
): Promise<void> => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      res.status(400).json({ msg: "Username and password are required" });
      return;
    }

    const user = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });

    if (!user) {
      res.status(400).json({ auth: false, message: "Wrong credential 🤔" });
      return;
    }

    const isPWMatch = await bcrypt.compare(password, user.password);

    if (isPWMatch) {
      const { id, username } = user;
      const accessToken = generateAccessToken({ id, username });

      res.status(200).json({
        auth: true,
        token: accessToken,
        user: { id, username },
      });
    } else {
      res.status(400).json({ auth: false, message: "Wrong credential 🤔" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error" });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      res.status(200).json({ user: null });
      return;
    }

    const decoded = jwt.verify(token, access_jwt_secret) as { id: number };

    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
      select: { id: true, username: true },
    });

    if (!user) {
      res.status(404).json({ msg: "User not found" });
      return;
    }

    res.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

export const logout = (req: Request, res: Response) => {
  res.status(200).json({ msg: "Logged out successfully" });
};
