/*
  Warnings:

  - Added the required column `image` to the `Cenema` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cenema" ADD COLUMN     "image" TEXT NOT NULL;
