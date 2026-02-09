/*
  Warnings:

  - You are about to drop the column `Info` on the `Client` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Client" DROP COLUMN "Info",
ADD COLUMN     "info" TEXT;
