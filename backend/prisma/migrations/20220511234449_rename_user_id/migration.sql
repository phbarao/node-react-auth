/*
  Warnings:

  - You are about to drop the column `userid` on the `refresh_token` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `refresh_token` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `refresh_token` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "refresh_token" DROP CONSTRAINT "refresh_token_userid_fkey";

-- DropIndex
DROP INDEX "refresh_token_userid_key";

-- AlterTable
ALTER TABLE "refresh_token" DROP COLUMN "userid",
ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "refresh_token_userId_key" ON "refresh_token"("userId");

-- AddForeignKey
ALTER TABLE "refresh_token" ADD CONSTRAINT "refresh_token_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
