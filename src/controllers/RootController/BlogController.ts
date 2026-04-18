import prisma from "../../config/prisma";
import { access_jwt_secret } from "../../config/db.config";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { AuthRequest } from "../../types/types";

export const createBlog = async (req: AuthRequest, res: Response) => {
  const { title, body, image_url, tag, readingTime } = req.body;

  try {
    // const token = req.header("Authorization").split(" ")[1];

    // const decoded = jwt.verify(token, access_jwt_secret) as { id: number };

    const response = await prisma.blog.create({
      data: {
        title: title,
        body: body,
        image_url: image_url,
        tag: tag,
        readingTime: Number(readingTime),
        authorId: req.userId,
      },
    });

    if (!response) {
      res.status(400).json({ msg: "Error creating a blog" });
      return;
    }

    res.status(200).json({
      blogCreated: response,
      msg: "Sucessfull",
    });
  } catch (error) {
    res.status(500).json({ msg: "Server internal error", error });
  }
};

export const getBlog = async (req: Request, res: Response) => {
  try {
    const blog = await prisma.blog.findMany({
      orderBy: {
        created_at: "desc",
      },
      include: {
        author: true,
      }
    });

    if (!blog) {
      res.status(400).json({ msg: "No Blog Found" });
      return;
    }

    res.status(200).json({
      blogs: blog,
      msg: "Fetched sucessful",
    });
  } catch (error) {
    res.status(500).json({ msg: "Server internal error" });
  }
};

export const updateBlog = async (req: AuthRequest, res: Response) => {
  const { title, body, image_url, tag, readingTime } = req.body;

  try {
    const response = await prisma.blog.update({
      where: {
        id: String(req.params.blogId),
      },
      data: {
        title: title,
        body: body,
        image_url: image_url,
        tag: tag,
        readingTime: Number(readingTime),
        authorId: req.userId,
      },
    });

    if (!response) {
      res.status(400).json({ msg: "Blog didn't update" });
      return;
    }

    res.status(200).json({ msg: "Blog updated successfully", data: response });
  } catch (error) {
    res.status(500).json({ msg: "Internal server error", error });
  }
};

export const deleteBlog = async (req: Request, res: Response) => {
  try {
    await prisma.blog.delete({
      where: {
        id: String(req.params.blogId),
      },
    });

    res.status(200).json({ msg: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Internal server error", error });
  }
};
