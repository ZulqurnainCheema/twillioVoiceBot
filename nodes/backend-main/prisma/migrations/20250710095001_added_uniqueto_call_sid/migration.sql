/*
  Warnings:

  - A unique constraint covering the columns `[callSid]` on the table `calls` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `calls_callSid_key` ON `calls`(`callSid`);
