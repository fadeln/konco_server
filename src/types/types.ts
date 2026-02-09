import { Request } from "express";

export type ILoginRequest = {
  username: string;
  password: string;
};

export type IJWTPayload = {
  id: number;
  username: string;
};
export interface AuthRequest extends Request {
  userId?: number;
}