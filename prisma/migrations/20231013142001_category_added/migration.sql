/*
  Warnings:

  - You are about to drop the `Travel` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TravelPrice` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TravelRating` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Vehicle` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TravelPrice" DROP CONSTRAINT "TravelPrice_travelId_fkey";

-- DropForeignKey
ALTER TABLE "TravelPrice" DROP CONSTRAINT "TravelPrice_vehicleId_fkey";

-- DropForeignKey
ALTER TABLE "TravelRating" DROP CONSTRAINT "TravelRating_travelId_fkey";

-- DropForeignKey
ALTER TABLE "TravelRating" DROP CONSTRAINT "TravelRating_userId_fkey";

-- DropTable
DROP TABLE "Travel";

-- DropTable
DROP TABLE "TravelPrice";

-- DropTable
DROP TABLE "TravelRating";

-- DropTable
DROP TABLE "Vehicle";

-- CreateTable
CREATE TABLE "CenemaCategory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "CenemaCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cenema" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "producerName" TEXT NOT NULL,
    "productionManager" TEXT NOT NULL,
    "releaseDate" TIMESTAMP(3) NOT NULL,
    "price" TEXT NOT NULL,

    CONSTRAINT "Cenema_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CenemaRating" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "cenemaId" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "comment" TEXT NOT NULL,

    CONSTRAINT "CenemaRating_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CenemaRating" ADD CONSTRAINT "CenemaRating_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CenemaRating" ADD CONSTRAINT "CenemaRating_cenemaId_fkey" FOREIGN KEY ("cenemaId") REFERENCES "Cenema"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
