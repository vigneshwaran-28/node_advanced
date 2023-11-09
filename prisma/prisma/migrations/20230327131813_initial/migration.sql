-- CreateTable
CREATE TABLE "car" (
    "id" SERIAL NOT NULL,
    "bio" TEXT,
    "car_color" TEXT,
    "car_model" TEXT,
    "car_model_year" TEXT,
    "country" TEXT,
    "email" TEXT,
    "first_name" TEXT,
    "gender" TEXT,

    CONSTRAINT "car_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" TEXT,
    "name" TEXT,
    "address" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);
