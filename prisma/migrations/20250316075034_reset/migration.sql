/*
  Warnings:

  - Added the required column `imagesUrl` to the `Car` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Car" ADD COLUMN     "imagesUrl" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Tour" ALTER COLUMN "imageUrls" SET NOT NULL,
ALTER COLUMN "imageUrls" SET DATA TYPE TEXT;
