-- AlterTable
ALTER TABLE `komentarz` ADD COLUMN `wpisId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Komentarz` ADD CONSTRAINT `Komentarz_wpisId_fkey` FOREIGN KEY (`wpisId`) REFERENCES `Wpis`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
