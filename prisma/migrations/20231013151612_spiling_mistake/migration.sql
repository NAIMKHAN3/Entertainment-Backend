/*
  Warnings:

  - You are about to drop the column `releaseDate` on the `Cenema` table. All the data in the column will be lost.
  - Added the required column `realeaseDate` to the `Cenema` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cenema" DROP COLUMN "releaseDate",
ADD COLUMN     "realeaseDate" TEXT NOT NULL;
