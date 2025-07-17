/*
  Warnings:

  - You are about to drop the column `BussinessName` on the `leads` table. All the data in the column will be lost.
  - You are about to drop the column `campaignName` on the `leads` table. All the data in the column will be lost.
  - You are about to drop the column `contactName` on the `leads` table. All the data in the column will be lost.
  - You are about to drop the column `contactPhone` on the `leads` table. All the data in the column will be lost.
  - Added the required column `callId` to the `leads` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `leads` DROP COLUMN `BussinessName`,
    DROP COLUMN `campaignName`,
    DROP COLUMN `contactName`,
    DROP COLUMN `contactPhone`,
    ADD COLUMN `callId` INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX `leads_callId_fkey` ON `leads`(`callId`);

-- AddForeignKey
ALTER TABLE `leads` ADD CONSTRAINT `leads_callId_fkey` FOREIGN KEY (`callId`) REFERENCES `calls`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- RedefineIndex
CREATE INDEX `leads_campaignId_fkey` ON `leads`(`campaignId`);
DROP INDEX `calls_campaignId_fkey` ON `leads`;
