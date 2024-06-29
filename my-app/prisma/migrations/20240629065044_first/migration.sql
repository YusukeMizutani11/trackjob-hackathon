-- CreateTable
CREATE TABLE "Interns" (
    "id" SERIAL NOT NULL,
    "company" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "hiring" BOOLEAN NOT NULL,
    "event_name" TEXT NOT NULL,
    "event_detail" TEXT NOT NULL,
    "target_student" TEXT NOT NULL,
    "recruit_begin" TIMESTAMP(3) NOT NULL,
    "recruit_end" TIMESTAMP(3),
    "event_term" INTEGER,
    "event_begin" TIMESTAMP(3),
    "event_end" TIMESTAMP(3),
    "tech_stack" TEXT NOT NULL,
    "remote" TEXT NOT NULL,

    CONSTRAINT "Interns_pkey" PRIMARY KEY ("id")
);
