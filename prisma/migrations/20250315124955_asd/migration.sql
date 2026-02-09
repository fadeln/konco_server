-- DropForeignKey
ALTER TABLE "TourItinerary" DROP CONSTRAINT "TourItinerary_tourId_fkey";

-- DropForeignKey
ALTER TABLE "TourPricing" DROP CONSTRAINT "TourPricing_tourId_fkey";

-- AlterTable
ALTER TABLE "Tour" ADD COLUMN     "information" TEXT[];

-- AddForeignKey
ALTER TABLE "TourPricing" ADD CONSTRAINT "TourPricing_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TourItinerary" ADD CONSTRAINT "TourItinerary_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour"("id") ON DELETE CASCADE ON UPDATE CASCADE;
