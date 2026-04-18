import prisma from "../../config/prisma";
import { Request, Response } from "express";

export const getWisata = async (req: Request, res: Response): Promise<void> => {
  try {
    const wisata = await prisma.wisata.findMany({
      include: {
        tours: {
          select: {
            tour: {
              include: {
                wisatas: {
                  include: {
                    wisata: true
                  }
                },
                tourItineraries: true,
                tourPricings: true,
              },
            },
          },
        },
      },
    });

    res.send(wisata);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

export const getWisataById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const wisata = await prisma.wisata.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });

    if (!wisata) {
      res.status(404).json({ msg: "Wisata not found" });
      return;
    }

    res.send(wisata);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

export const createWisata = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { title, description, image_url } = req.body;

    console.log(title, description, image_url);

    if (!title || !description || !image_url) {
      res.status(400).json({ msg: "please fill all the required form" });
      return;
    }

    const wisata = await prisma.wisata.create({
      data: {
        title: title,
        description: description,
        image_url: image_url,
      },
    });

    res.status(200).json({ msg: "success created wisata", wisata });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

export const deleteWisata = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const wisataToDelete = await prisma.wisata.findUnique({
      where: {
        id: Number(req.params.wisataId),
      },
    });

    if (!wisataToDelete) {
      res.status(404).json({ msg: "Wisata not found" });
      return;
    }

    const deleteWisata = await prisma.wisata.delete({
      where: {
        id: Number(req.params.wisataId),
      },
    });

    res.send(deleteWisata);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

export const updateWisata = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { title, description } = req.body;

    const wisataToUpdate = await prisma.wisata.findUnique({
      where: {
        id: Number(req.params.wisataId),
      },
    });

    if (!wisataToUpdate) {
      res.status(404).json({ msg: "Wisata not found" });
      return;
    }

    const updateWisata = await prisma.wisata.update({
      where: {
        id: Number(req.params.wisataId),
      },
      data: {
        title: title,
        description: description,
      },
    });

    res.json({ msg: "success update wisata", updateWisata });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
};
