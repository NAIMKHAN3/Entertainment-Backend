-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Pending', 'Accepted', 'Rejected');

-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'Pending';
