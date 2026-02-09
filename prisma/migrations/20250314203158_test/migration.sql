-- CreateEnum
CREATE TYPE "CarColors" AS ENUM ('Merah', 'Biru', 'Hitam', 'Putih', 'Kuning', 'Silver');

-- CreateEnum
CREATE TYPE "CarTransmission" AS ENUM ('Manual', 'Automatic', 'CVT', 'DCT', 'AMT', 'Tiptronic', 'DirectDrive');

-- CreateEnum
CREATE TYPE "BlogTags" AS ENUM ('Konco', 'Alam', 'Budaya', 'Kuliner', 'Sejarah');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Wisata" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "images_url" TEXT[],

    CONSTRAINT "Wisata_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tour" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "images_url" TEXT[],

    CONSTRAINT "Tour_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WisatasOnTours" (
    "wisataId" INTEGER NOT NULL,
    "tourId" INTEGER NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,

    CONSTRAINT "WisatasOnTours_pkey" PRIMARY KEY ("wisataId","tourId")
);

-- CreateTable
CREATE TABLE "Car" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "seats" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL,
    "color" "CarColors" NOT NULL,
    "transmission" "CarTransmission" NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Blog" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "WisatasOnTours" ADD CONSTRAINT "WisatasOnTours_wisataId_fkey" FOREIGN KEY ("wisataId") REFERENCES "Wisata"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WisatasOnTours" ADD CONSTRAINT "WisatasOnTours_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Blog" ADD CONSTRAINT "Blog_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
