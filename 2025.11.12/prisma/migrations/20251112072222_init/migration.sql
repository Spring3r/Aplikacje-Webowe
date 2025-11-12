/*
  Warnings:

  - Added the required column `kategoriaId` to the `Komentarz` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kategoriaId` to the `Wpis` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `komentarz` ADD COLUMN `kategoriaId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `wpis` ADD COLUMN `kategoriaId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Wpis` ADD CONSTRAINT `Wpis_kategoriaId_fkey` FOREIGN KEY (`kategoriaId`) REFERENCES `Kategoria`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Komentarz` ADD CONSTRAINT `Komentarz_kategoriaId_fkey` FOREIGN KEY (`kategoriaId`) REFERENCES `Kategoria`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
