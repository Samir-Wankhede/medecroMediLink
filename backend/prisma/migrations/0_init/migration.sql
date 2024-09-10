-- CreateTable
CREATE TABLE "appointments" (
    "appointment_id" SERIAL NOT NULL,
    "user_id" INTEGER,
    "professional_id" INTEGER,
    "appointment_date" TIMESTAMP(6) NOT NULL,
    "status" VARCHAR(20) DEFAULT 'scheduled',
    "notes" TEXT,
    "prescription" TEXT,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "appointments_pkey" PRIMARY KEY ("appointment_id")
);

-- CreateTable
CREATE TABLE "medical_professional" (
    "medi_id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "phone_number" VARCHAR(15),
    "address" VARCHAR(200),
    "maps_link" TEXT,
    "specialty" VARCHAR(100),
    "license_number" VARCHAR(50),
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "medical_professional_pkey" PRIMARY KEY ("medi_id")
);

-- CreateTable
CREATE TABLE "medical_professional_password" (
    "professional_id" INTEGER NOT NULL,
    "password_hash" VARCHAR(255) NOT NULL,
    "last_updated" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "medical_professional_password_pkey" PRIMARY KEY ("professional_id")
);

-- CreateTable
CREATE TABLE "user_data" (
    "user_id" SERIAL NOT NULL,
    "first_name" VARCHAR(50) NOT NULL,
    "last_name" VARCHAR(50) NOT NULL,
    "email" VARCHAR(100),
    "phone_number" VARCHAR(15) NOT NULL,
    "preferred_language" VARCHAR(100),
    "date_of_birth" DATE,
    "age" INTEGER,
    "gender" VARCHAR(10),
    "address" VARCHAR(100),
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_data_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "user_password" (
    "user_id" INTEGER NOT NULL,
    "password_hash" VARCHAR(255) NOT NULL,
    "last_updated" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_password_pkey" PRIMARY KEY ("user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "medical_professional_email_key" ON "medical_professional"("email");

-- CreateIndex
CREATE UNIQUE INDEX "medical_professional_license_number_key" ON "medical_professional"("license_number");

-- CreateIndex
CREATE UNIQUE INDEX "user_data_email_key" ON "user_data"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_data_phone_number_key" ON "user_data"("phone_number");

-- AddForeignKey
ALTER TABLE "appointments" ADD CONSTRAINT "appointments_professional_id_fkey" FOREIGN KEY ("professional_id") REFERENCES "medical_professional"("medi_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "appointments" ADD CONSTRAINT "appointments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_data"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "medical_professional_password" ADD CONSTRAINT "medical_professional_password_professional_id_fkey" FOREIGN KEY ("professional_id") REFERENCES "medical_professional"("medi_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_password" ADD CONSTRAINT "user_password_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user_data"("user_id") ON DELETE CASCADE ON UPDATE NO ACTION;

