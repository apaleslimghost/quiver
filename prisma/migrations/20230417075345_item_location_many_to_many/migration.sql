-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_locationId_fkey";

-- CreateTable
CREATE TABLE "ItemLocations" (
    "itemId" INTEGER NOT NULL,
    "locationId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "ItemLocations_pkey" PRIMARY KEY ("itemId","locationId")
);

-- AddForeignKey
ALTER TABLE "ItemLocations" ADD CONSTRAINT "ItemLocations_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemLocations" ADD CONSTRAINT "ItemLocations_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
