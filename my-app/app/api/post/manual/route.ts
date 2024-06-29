import prisma from "@/prisma/client";
import { empty } from "@prisma/client/runtime/library";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { datas } from "@/app/constants/allData";

const constantData = datas

// const schema = z.object({
//   company : z.string(),
//   url : z.string(),
//   hiring : z.boolean(),
//   event_name : z.string(),
//   event_detail : z.string(),
//   target_student : z.string(),
//   //TODO: nullable fields は入れてない
//   tech_stack : z.string(),
//   remote : z.string()

// })

function convertToISODate(dateString: string) {
  const date = new Date(dateString.replace(/\//g, "-")); // Replace '/' with '-'
  return date.toISOString();
}

export async function POST(req: NextRequest, res: NextResponse) {
  let body = constantData[0];

  const intern = await prisma.interns.create({
    data: {
      company: typeof body.主催 === "string" ? body.主催 : "",
      url: typeof body.リンク === "string" ? body.リンク : "",
      hiring: body.募集状況 === "募集中",
      event_name: typeof body.イベント名 === "string" ? body.イベント名 : "",
      event_detail: typeof body["内容 / 必要な経験 (簡潔に!)"] === "string" ? body["内容 / 必要な経験 (簡潔に!)"] : "",
      target_student: typeof body.対象者 === "string" ? body.対象者 : "",
      recruit_begin: typeof body.募集開始 === "string" ? convertToISODate(body.募集開始) : null,
      recruit_end: typeof body.募集開始 === "string" ? convertToISODate(body.募集開始) : null,
      tech_stack: typeof body.技術スタック === "string" ? body.技術スタック : "",
      remote: typeof body.場所 === "string" ? body.場所 : ""
    },
  });


  return NextResponse.json(intern);
}
