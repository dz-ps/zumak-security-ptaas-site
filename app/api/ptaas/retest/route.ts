import { NextRequest, NextResponse } from "next/server"
export async function POST(req: NextRequest){
  // Mock success
  return NextResponse.json({ok:true, message:"Reteste agendado"})
}
