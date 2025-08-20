import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { rateLimit } from "@/lib/rate-limit"
import { promises as fs } from "fs"

const schema = z.object({ email: z.string().email() })

export async function POST(req: NextRequest){
  const ip = req.headers.get("x-forwarded-for") || "local"
  if(!rateLimit(`newsletter:${ip}`, 30, 60_000).ok){
    return NextResponse.json({error:"Rate limit excedido"}, { status: 429 })
  }
  const body = await req.json()
  const parsed = schema.safeParse(body)
  if(!parsed.success) return NextResponse.json({error:"E-mail inválido"},{status:400})
  await fs.mkdir(process.cwd() + "/data", { recursive: true })
  let list = []
  try{
    const raw = await fs.readFile(process.cwd()+"/data/newsletter.json","utf-8")
    list = JSON.parse(raw)
  }catch{}
  if(!list.includes(parsed.data.email)) list.push(parsed.data.email)
  await fs.writeFile(process.cwd()+"/data/newsletter.json", JSON.stringify(list, null, 2))
  return NextResponse.json({ok:true})
}
