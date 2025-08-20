import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import nodemailer from "nodemailer"
import { rateLimit } from "@/lib/rate-limit"

const schema = z.object({
  nome: z.string().min(2),
  email: z.string().email(),
  empresa: z.string().optional(),
  telefone: z.string().optional(),
  site: z.string().url().optional(),
  mensagem: z.string().min(10),
  lgpd: z.boolean().refine(v=>v===true, "Consentimento LGPD é obrigatório"),
  recaptchaToken: z.string().optional()
})

async function verifyRecaptcha(token?: string){
  // Placeholder: when RECAPTCHA_SECRET is present, you would POST to Google API.
  // To keep this demo functional offline, accept when token exists or when no secret provided.
  if(process.env.RECAPTCHA_SECRET){
    return !!token
  }
  return true
}

export async function POST(req: NextRequest){
  const ip = req.headers.get("x-forwarded-for") || "local"
  if(!rateLimit(`contato:${ip}`, 5, 60_000).ok){
    return NextResponse.json({error:"Rate limit excedido"}, { status: 429 })
  }
  const json = await req.json()
  const parsed = schema.safeParse(json)
  if(!parsed.success){
    return NextResponse.json({error: parsed.error.flatten()}, { status: 400 })
  }
  if(!(await verifyRecaptcha(parsed.data.recaptchaToken))){
    return NextResponse.json({error:"reCAPTCHA inválido"}, { status: 400 })
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: false,
    auth: process.env.SMTP_USER ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } : undefined
  })
  const from = process.env.SMTP_FROM || "no-reply@example.com"
  const to = process.env.SMTP_TO || "contato@example.com"
  await transporter.sendMail({
    from, to, subject: "Novo contato — Zumak Security",
    text: `Nome: ${parsed.data.nome}\nEmail: ${parsed.data.email}\nEmpresa: ${parsed.data.empresa}\nTelefone: ${parsed.data.telefone}\nSite: ${parsed.data.site}\nMensagem: ${parsed.data.mensagem}`
  })

  return NextResponse.json({ok:true})
}
