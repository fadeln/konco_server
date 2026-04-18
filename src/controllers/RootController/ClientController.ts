import prisma from "../../config/prisma";
import { Request, Response } from "express";

export const createOrder = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {name, email, phone, date, location, info, tourId } = req.body;
    

    if (!name || !email || !phone || !date || !location || !info || !tourId) {
      res.status(400).json({ msg: "please fill all the required form" });
      return;
    }

    const wisata = await prisma.client.create({
      data: {
        name: name,
        email: email,
        phone: phone,
        date: date,
        location: location,
        info: info,
        tourId: tourId
      },
    });

    res.status(200).json({ msg: "success created wisata", wisata });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
};