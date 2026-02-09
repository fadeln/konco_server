import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getCar = async (req: Request, res: Response): Promise<void> => {
  try {
    const car = await prisma.car.findMany();

    res.send(car);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

export const getCarById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const car = await prisma.car.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });

    if (!car) {
      res.status(404).json({ msg: "Wisata not found" });
      return;
    }

    res.send(car);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

export const createCar = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, seats, status, color, transmission, image_url } = req.body;

    if (!name || !seats || !status || !color || !transmission) {
      res.status(400).json({ msg: "please fill all the required form" });
      return;
    }

    const car = await prisma.car.create({
      data: {
        name: name,
        seats: seats,
        status: status,
        color: color,
        image_url: image_url,
        transmission: transmission,
      },
    });

    res.json({ msg: "success created car", car });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

export const deleteCar = async (req: Request, res: Response): Promise<void> => {
  try {
    const carToDelete = await prisma.tour.findUnique({
      where: {
        id: Number(req.params.carId),
      },
    });

    if (!carToDelete) {
      res.status(404).json({ msg: "Car not found" });
      return;
    }

    const deleteCar = await prisma.car.delete({
      where: {
        id: Number(req.params.carId),
      },
    });

    res.send(deleteCar);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

export const updateCar = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, seats, status, color, transmission } = req.body;

    const carToUpdate = await prisma.tour.findUnique({
      where: {
        id: Number(req.params.carId),
      },
    });

    if (!carToUpdate) {
      res.status(404).json({ msg: "Car not found" });
      return;
    }

    const updateCar = await prisma.car.update({
      where: {
        id: Number(req.params.wisataId),
      },
      data: {
        name: name,
        seats: seats,
        status: status,
        color: color,
        transmission: transmission,
      },
    });

    res.json({ msg: "success update car", updateCar });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
};
