/*
  Warnings:

  - You are about to drop the column `imagesUrl` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrls` on the `Tour` table. All the data in the column will be lost.
  - You are about to drop the column `images_url` on the `Wisata` table. All the data in the column will be lost.
  - Added the required column `image_url` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image_url` to the `Tour` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image_url` to the `Wisata` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Car" DROP COLUMN "imagesUrl",
ADD COLUMN     "image_url" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Tour" DROP COLUMN "imageUrls",
ADD COLUMN     "image_url" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Wisata" DROP COLUMN "images_url",
ADD COLUMN     "image_url" TEXT NOT NULL;
