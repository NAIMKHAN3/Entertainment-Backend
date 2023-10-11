-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_profileImg_fkey" FOREIGN KEY ("profileImg") REFERENCES "FileUpload"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
