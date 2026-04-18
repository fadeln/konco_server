import prisma from "../../config/prisma";
import { Request, Response } from "express";

export const getTour = async (req: Request, res: Response): Promise<void> => {
  try {
    const tour = await prisma.tour.findMany({
      include: {
        wisatas: {
          select: {
            wisata: true,
          },
        },
        tourPricings: true,
        tourItineraries: true,
      },
    });

    res.send(tour);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

export const getTourById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const tour = await prisma.tour.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });

    if (!tour) {
      res.status(404).json({ msg: "Tour not found" });
      return;
    }

    res.send(tour);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

export const createTour = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      title,
      description,
      image_url,
      information,
      isGuided,
      isOpenGroup,
      minAge,
      maxAge,
      paketWisata,
      tourPricings,
      tourItineraries,
    } = req.body;

    if (!title || !description) {
      res.status(400).json({ msg: "please fill all the required form" });
      return;
    }

    const tour = await prisma.tour.create({
      data: {
        title: title,
        description: description,
        image_url:image_url,
        information:information,
        isGuided: isGuided,
        isOpenGroup: isOpenGroup,
        minAge: minAge,
        maxAge: maxAge,
        wisatas: {
          create: paketWisata.map((wisataId) => ({
            assignedBy: "Admin",
            assignedAt: new Date(),
            wisata: {
              connect: { id: wisataId },
            },
          })),
        },
        tourPricings: {
          create: tourPricings.map(
            ({ numPersons, subTotalPrice }) => ({
              numPersons: numPersons,
              subTotalPrice: subTotalPrice,
           
            })
          ),
        },
        tourItineraries: {
          create: tourItineraries?.map(({ dayNumber, title, description }) => ({
            dayNumber: dayNumber,
            title: title,
            description: description,
          })),
        },
      },
    });

    res.json({ msg: "success created tour", tour });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

export const deleteTour = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const tourToDelete = await prisma.tour.findUnique({
      where: {
        id: Number(req.params.tourId),
      },
    });

    if (!tourToDelete) {
      res.status(404).json({ msg: "tour not found" });
      return;
    }

    const deleteTour = await prisma.tour.delete({
      where: {
        id: Number(req.params.tourId),
      },
    });

    res.send(deleteTour);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
};

export const updateTour = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      title,
      description,
      image_url,
      information,
      isGuided,
      isOpenGroup,
      minAge,
      maxAge,
      paketWisata,
      tourPricings,
      tourItineraries,
    } = req.body;

    const tourToUpdate = await prisma.tour.findUnique({
      where: {
        id: Number(req.params.tourId),
      },
    });

    if (!tourToUpdate) {
      res.status(404).json({ msg: "Tour not found" });
      return;
    }

    const updatedTour = await prisma.tour.update({
      where: {
        id: Number(req.params.tourId),
      },

      data: {
        title: title,
        description: description,
        image_url: image_url,
        information:information,
        isGuided: isGuided,
        isOpenGroup: isOpenGroup,
        minAge: minAge,
        maxAge: maxAge,
        wisatas: {
          deleteMany: {}, 
          create: paketWisata?.map((wisataId) => ({
            assignedBy: "Admin",
            assignedAt: new Date(),
            wisata: {
              connect: { id: wisataId },
            },
          })),
        },
        tourPricings: {
          deleteMany: {}, 
          create: tourPricings?.map(
            ({ numPersons, subTotalPrice }) => ({
              numPersons: numPersons,
              subTotalPrice: subTotalPrice,
           
            })
          ),
        },
        tourItineraries: {
          deleteMany: {}, 
          create: tourItineraries?.map(({ dayNumber, title, description }) => ({
            dayNumber: dayNumber,
            title: title,
            description: description,
          })),
        },
      },
    });

    res.json({ msg: "success update tour", updatedTour });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
};
