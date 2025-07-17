/*
  Warnings:

  - You are about to drop the column `callId` on the `leads` table. All the data in the column will be lost.
  - Added the required column `callSid` to the `leads` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `leads` DROP FOREIGN KEY `leads_callId_fkey`;

-- DropIndex
DROP INDEX `leads_callId_fkey` ON `leads`;

-- AlterTable
ALTER TABLE `leads` DROP COLUMN `callId`,
    ADD COLUMN `callSid` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE INDEX `leads_callSid_fkey` ON `leads`(`callSid`);

-- AddForeignKey
ALTER TABLE `leads` ADD CONSTRAINT `leads_callSid_fkey` FOREIGN KEY (`callSid`) REFERENCES `calls`(`callSid`) ON DELETE RESTRICT ON UPDATE CASCADE;
