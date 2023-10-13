/*
  Warnings:

  - You are about to drop the column `price` on the `Travel` table. All the data in the column will be lost.
  - You are about to drop the column `vehicleId` on the `Travel` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Travel" DROP CONSTRAINT "Travel_vehicleId_fkey";

-- AlterTable
ALTER TABLE "Travel" DROP COLUMN "price",
DROP COLUMN "vehicleId";

-- CreateTable
CREATE TABLE "TravelPrice" (
    "id" TEXT NOT NULL,
    "travelId" TEXT NOT NULL,
    "vehicleId" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "TravelPrice_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TravelPrice" ADD CONSTRAINT "TravelPrice_travelId_fkey" FOREIGN KEY ("travelId") REFERENCES "Travel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TravelPrice" ADD CONSTRAINT "TravelPrice_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
