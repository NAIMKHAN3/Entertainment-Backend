-- CreateTable
CREATE TABLE "Vehicle" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Vehicle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Travel" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "vehicleId" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Travel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TravelRating" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "travelId" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "comment" TEXT NOT NULL,

    CONSTRAINT "TravelRating_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Travel" ADD CONSTRAINT "Travel_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TravelRating" ADD CONSTRAINT "TravelRating_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TravelRating" ADD CONSTRAINT "TravelRating_travelId_fkey" FOREIGN KEY ("travelId") REFERENCES "Travel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
