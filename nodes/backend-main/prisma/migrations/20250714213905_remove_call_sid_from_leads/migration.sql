/*
  Warnings:

  - You are about to drop the column `callSid` on the `leads` table. All the data in the column will be lost.
  - Added the required column `businessName` to the `leads` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contactName` to the `leads` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contactPhone` to the `leads` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `leads` DROP FOREIGN KEY `leads_callSid_fkey`;

-- DropIndex
DROP INDEX `leads_callSid_fkey` ON `leads`;

-- AlterTable
ALTER TABLE `leads` DROP COLUMN `callSid`,
    ADD COLUMN `businessName` VARCHAR(191) NOT NULL,
    ADD COLUMN `contactName` VARCHAR(191) NOT NULL,
    ADD COLUMN `contactPhone` VARCHAR(191) NOT NULL;
