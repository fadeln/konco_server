/*
  Warnings:

  - You are about to drop the column `maxGroupSize` on the `Tour` table. All the data in the column will be lost.
  - You are about to drop the column `minGroupSize` on the `Tour` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Tour" DROP COLUMN "maxGroupSize",
DROP COLUMN "minGroupSize";
