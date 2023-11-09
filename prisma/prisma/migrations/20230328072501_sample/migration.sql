/*
  Warnings:

  - You are about to drop the `car` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "car";

-- DropTable
DROP TABLE "users";

-- CreateTable
CREATE TABLE "playList" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "playList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlayListTrack" (
    "id" SERIAL NOT NULL,
    "addedAt" TIMESTAMP(3) NOT NULL,
    "playListId" INTEGER NOT NULL,

    CONSTRAINT "PlayListTrack_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Track" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Track_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PlayListTrack" ADD CONSTRAINT "PlayListTrack_playListId_fkey" FOREIGN KEY ("playListId") REFERENCES "playList"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
