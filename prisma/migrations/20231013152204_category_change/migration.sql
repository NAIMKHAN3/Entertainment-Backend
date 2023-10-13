/*
  Warnings:

  - You are about to drop the column `category` on the `Cenema` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `Cenema` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cenema" DROP COLUMN "category",
ADD COLUMN     "categoryId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Cenema" ADD CONSTRAINT "Cenema_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "CenemaCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
