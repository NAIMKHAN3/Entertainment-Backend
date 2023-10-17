-- CreateTable
CREATE TABLE "Booking" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "cenemaId" TEXT NOT NULL,
    "bookingDate" TEXT NOT NULL,
    "slot" TEXT NOT NULL,
    "person" TEXT NOT NULL,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_cenemaId_fkey" FOREIGN KEY ("cenemaId") REFERENCES "Cenema"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
