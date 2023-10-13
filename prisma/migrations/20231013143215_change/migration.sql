/*
  Warnings:

  - You are about to drop the `Cenema` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CenemaCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CenemaRating` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CenemaRating" DROP CONSTRAINT "CenemaRating_cenemaId_fkey";

-- DropForeignKey
ALTER TABLE "CenemaRating" DROP CONSTRAINT "CenemaRating_userId_fkey";

-- DropTable
DROP TABLE "Cenema";

-- DropTable
DROP TABLE "CenemaCategory";

-- DropTable
DROP TABLE "CenemaRating";
