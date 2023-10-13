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
    "releaseDate" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

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
