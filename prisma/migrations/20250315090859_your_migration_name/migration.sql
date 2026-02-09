/*
  Warnings:

  - You are about to drop the column `subtotalPrice` on the `TourPricing` table. All the data in the column will be lost.
  - Added the required column `subTotalPrice` to the `TourPricing` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TourPricing" DROP COLUMN "subtotalPrice",
ADD COLUMN     "subTotalPrice" INTEGER NOT NULL;
