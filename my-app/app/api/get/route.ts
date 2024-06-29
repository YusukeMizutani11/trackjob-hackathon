import prisma from "@/prisma/client";
import next from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(res:NextResponse) {
  const req = await prisma.interns.findMany()
  return(NextResponse.json(req))
}