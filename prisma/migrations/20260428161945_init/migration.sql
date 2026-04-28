-- CreateTable
CREATE TABLE "builder_enquiries" (
    "id" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "contactPerson" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "projects" TEXT NOT NULL,
    "monthlyEnquiries" TEXT NOT NULL,
    "teamSize" TEXT NOT NULL,
    "message" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "builder_enquiries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "seller_appointments" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "mobileNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "propertyType" TEXT NOT NULL,
    "propertyLocation" TEXT NOT NULL,
    "expectedPrice" TEXT NOT NULL,
    "preferredCallTime" TEXT NOT NULL,
    "message" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "seller_appointments_pkey" PRIMARY KEY ("id")
);
