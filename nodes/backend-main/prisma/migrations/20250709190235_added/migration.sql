/*
  Warnings:

  - You are about to drop the column `contactCompany` on the `calls` table. All the data in the column will be lost.
  - Added the required column `BussinessName` to the `calls` table without a default value. This is not possible if the table is not empty.
  - Added the required column `CallDuration` to the `calls` table without a default value. This is not possible if the table is not empty.
  - Added the required column `From` to the `calls` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `calls` DROP COLUMN `contactCompany`,
    ADD COLUMN `BussinessName` VARCHAR(191) NOT NULL,
    ADD COLUMN `CallDuration` VARCHAR(191) NOT NULL,
    ADD COLUMN `From` VARCHAR(191) NOT NULL;
