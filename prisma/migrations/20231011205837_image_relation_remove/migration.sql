/*
  Warnings:

  - You are about to drop the `FileUpload` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_profileImg_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "profileImg" SET DEFAULT 'https://res.cloudinary.com/droyjiqwf/image/upload/v1696801827/download_d6s8bi.jpg';

-- DropTable
DROP TABLE "FileUpload";
