/*
  Warnings:

  - You are about to drop the `_CultureToFarm` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `name` on table `cultures` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "_CultureToFarm" DROP CONSTRAINT "_CultureToFarm_A_fkey";

-- DropForeignKey
ALTER TABLE "_CultureToFarm" DROP CONSTRAINT "_CultureToFarm_B_fkey";

-- AlterTable
ALTER TABLE "cultures" ALTER COLUMN "name" SET NOT NULL;

-- DropTable
DROP TABLE "_CultureToFarm";

-- CreateTable
CREATE TABLE "_FarmCultures" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_FarmCultures_AB_unique" ON "_FarmCultures"("A", "B");

-- CreateIndex
CREATE INDEX "_FarmCultures_B_index" ON "_FarmCultures"("B");

-- AddForeignKey
ALTER TABLE "_FarmCultures" ADD CONSTRAINT "_FarmCultures_A_fkey" FOREIGN KEY ("A") REFERENCES "cultures"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FarmCultures" ADD CONSTRAINT "_FarmCultures_B_fkey" FOREIGN KEY ("B") REFERENCES "farms"("id") ON DELETE CASCADE ON UPDATE CASCADE;
