/*
  Warnings:

  - Added the required column `email` to the `leads` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `leads` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `leads` ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;
