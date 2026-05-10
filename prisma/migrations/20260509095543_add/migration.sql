/*
  Warnings:

  - The values [DONOR,RECEIVER] on the enum `UserRole` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `impactScore` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `isBanned` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `latitude` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `longitude` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[phone]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `category` to the `posts` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AccountStatus" AS ENUM ('ACTIVE', 'PENDING', 'INCOMPLETE_PROFILE', 'BANNED');

-- CreateEnum
CREATE TYPE "PostCategory" AS ENUM ('COOKED_FOOD', 'DRY_FOOD', 'CLOTHING', 'FURNITURE', 'ELECTRONICS', 'MEDICAL_SUPPLIES', 'OTHERS');

-- AlterEnum
BEGIN;
CREATE TYPE "UserRole_new" AS ENUM ('USER', 'ORGANIZATION', 'ADMIN', 'SUPER_ADMIN');
ALTER TABLE "public"."users" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "users" ALTER COLUMN "role" TYPE "UserRole_new" USING ("role"::text::"UserRole_new");
ALTER TYPE "UserRole" RENAME TO "UserRole_old";
ALTER TYPE "UserRole_new" RENAME TO "UserRole";
DROP TYPE "public"."UserRole_old";
ALTER TABLE "users" ALTER COLUMN "role" SET DEFAULT 'USER';
COMMIT;

-- AlterTable
ALTER TABLE "posts" ADD COLUMN     "category" "PostCategory" NOT NULL,
ADD COLUMN     "metadata" JSONB;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "impactScore",
DROP COLUMN "isBanned",
DROP COLUMN "latitude",
DROP COLUMN "longitude",
DROP COLUMN "name",
ADD COLUMN     "authProvider" TEXT DEFAULT 'local',
ADD COLUMN     "needsPasswordChange" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "profilePictureUrl" TEXT,
ADD COLUMN     "status" "AccountStatus" NOT NULL DEFAULT 'ACTIVE',
ALTER COLUMN "passwordHash" DROP NOT NULL,
ALTER COLUMN "phone" DROP NOT NULL;

-- CreateTable
CREATE TABLE "user_profiles" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "impactScore" DOUBLE PRECISION NOT NULL DEFAULT 0,

    CONSTRAINT "user_profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "organization_profiles" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "orgName" TEXT NOT NULL,
    "establishedYear" INTEGER,
    "registrationNumber" TEXT,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "impactScore" DOUBLE PRECISION NOT NULL DEFAULT 0,

    CONSTRAINT "organization_profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "admin_profiles" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "department" TEXT,

    CONSTRAINT "admin_profiles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_profiles_userId_key" ON "user_profiles"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "organization_profiles_userId_key" ON "organization_profiles"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "admin_profiles_userId_key" ON "admin_profiles"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_key" ON "users"("phone");

-- AddForeignKey
ALTER TABLE "user_profiles" ADD CONSTRAINT "user_profiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "organization_profiles" ADD CONSTRAINT "organization_profiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "admin_profiles" ADD CONSTRAINT "admin_profiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
