/*
  Warnings:

  - Added the required column `callSid` to the `calls` table without a default value. This is not possible if the table is not empty.
  - Added the required column `recordingsLink` to the `calls` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transcriptionsLink` to the `calls` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `calls` ADD COLUMN `callSid` VARCHAR(191) NOT NULL,
    ADD COLUMN `recordingsLink` VARCHAR(191) NOT NULL,
    ADD COLUMN `transcriptionsLink` VARCHAR(191) NOT NULL;
