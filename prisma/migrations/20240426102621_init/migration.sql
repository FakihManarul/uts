-- CreateTable
CREATE TABLE "Buah" (
    "id" TEXT NOT NULL,
    "buah" TEXT NOT NULL,
    "harga" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Buah_pkey" PRIMARY KEY ("id")
);
