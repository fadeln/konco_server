/*
  Warnings:

  - You are about to drop the column `images_url` on the `Tour` table. All the data in the column will be lost.
  - Added the required column `isGuided` to the `Tour` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isOpenGroup` to the `Tour` table without a default value. This is not possible if the table is not empty.
  - Added the required column `minAge` to the `Tour` table without a default value. This is not possible if the table is not empty.
  - Added the required column `minGroupSize` to the `Tour` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tour" DROP COLUMN "images_url",
ADD COLUMN     "imageUrls" TEXT[],
ADD COLUMN     "isGuided" BOOLEAN NOT NULL,
ADD COLUMN     "isOpenGroup" BOOLEAN NOT NULL,
ADD COLUMN     "maxAge" INTEGER,
ADD COLUMN     "maxGroupSize" INTEGER,
ADD COLUMN     "minAge" INTEGER NOT NULL,
ADD COLUMN     "minGroupSize" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "TourPricing" (
    "id" SERIAL NOT NULL,
    "numPersons" INTEGER NOT NULL,
    "subtotalPrice" INTEGER NOT NULL,
    "isBestValue" BOOLEAN NOT NULL,
    "tourId" INTEGER,

    CONSTRAINT "TourPricing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TourItinerary" (
    "id" SERIAL NOT NULL,
    "dayNumber" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "tourId" INTEGER,

    CONSTRAINT "TourItinerary_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TourPricing" ADD CONSTRAINT "TourPricing_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TourItinerary" ADD CONSTRAINT "TourItinerary_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour"("id") ON DELETE SET NULL ON UPDATE CASCADE;
