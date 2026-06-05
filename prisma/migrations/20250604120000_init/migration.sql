-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateTable
CREATE TABLE "ClientInquiry" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "companyName" TEXT,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "projectType" TEXT NOT NULL,
    "budget" TEXT NOT NULL,
    "timeline" TEXT NOT NULL,
    "projectDescription" TEXT NOT NULL,
    "referralSource" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ClientInquiry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeamApplication" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "role" TEXT NOT NULL,
    "experience" TEXT NOT NULL,
    "portfolioUrl" TEXT,
    "linkedinUrl" TEXT,
    "whyJoin" TEXT NOT NULL,
    "availability" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TeamApplication_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ClientInquiry_email_idx" ON "ClientInquiry"("email");

-- CreateIndex
CREATE INDEX "ClientInquiry_createdAt_idx" ON "ClientInquiry"("createdAt");

-- CreateIndex
CREATE INDEX "TeamApplication_email_idx" ON "TeamApplication"("email");

-- CreateIndex
CREATE INDEX "TeamApplication_createdAt_idx" ON "TeamApplication"("createdAt");
