import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  company : z.string(),
  url : z.string(),
  hiring : z.boolean(),
  event_name : z.string(),
  event_detail : z.string(),
  target_student : z.string(),
  //TODO: nullable fields は入れてない
  tech_stack : z.string(),
  remote : z.string()


})

export async function POST(req:NextRequest , res : NextResponse) {

  const body = await req.json()
  const validation = schema.safeParse(body)
  if(!validation.success){
    return NextResponse.json({error : validation.error.errors})
  }

  const intern = await prisma.interns.create({
    data : {
      company : body.company,
      url : body.url,
      hiring : body.hiring,
      event_name : body.event_name ,
      event_detail : body.event_detail,
      target_student : body.target_student,
      tech_stack : body.tech_stack,
      remote : body.remote
    }
  })

  return NextResponse.json(intern)
}