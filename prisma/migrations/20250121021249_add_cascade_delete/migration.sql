-- DropForeignKey
ALTER TABLE "Playlist" DROP CONSTRAINT "Playlist_ownerId_fkey";

-- AddForeignKey
ALTER TABLE "Playlist" ADD CONSTRAINT "Playlist_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
