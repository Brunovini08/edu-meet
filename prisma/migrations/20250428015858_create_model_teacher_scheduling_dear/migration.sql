-- CreateEnum
CREATE TYPE "Category" AS ENUM ('MATEMATICA', 'PORTUGUES', 'FISICA', 'QUIMICA', 'GEOGRAFIA', 'HISTORIA', 'CIENCIAS', 'INGLES', 'ESPANHOL', 'OUTROS');

-- CreateTable
CREATE TABLE "Dear" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "teacherId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Teacher" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "description" CHAR(200) NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "category" "Category" NOT NULL
);

-- CreateTable
CREATE TABLE "Scheduling" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" CHAR(200) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "dearId" TEXT NOT NULL,
    "teacherId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Dear_id_key" ON "Dear"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Dear_email_key" ON "Dear"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Dear_teacherId_key" ON "Dear"("teacherId");

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_id_key" ON "Teacher"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_email_key" ON "Teacher"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Scheduling_id_key" ON "Scheduling"("id");

-- AddForeignKey
ALTER TABLE "Dear" ADD CONSTRAINT "Dear_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Scheduling" ADD CONSTRAINT "Scheduling_dearId_fkey" FOREIGN KEY ("dearId") REFERENCES "Dear"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Scheduling" ADD CONSTRAINT "Scheduling_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
