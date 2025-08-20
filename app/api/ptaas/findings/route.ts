import { NextResponse } from "next/server"
export async function GET(){
  return NextResponse.json([
    { id:1, severity:"Crítica", title:"RCE em upload", status:"Aberto", cvss:9.8, discovered:"2025-07-01", retest:null },
    { id:2, severity:"Alta", title:"SQLi em parâmetro id", status:"Em correção", cvss:8.6, discovered:"2025-07-03", retest:null },
    { id:3, severity:"Média", title:"XSS refletido", status:"Retestado", cvss:6.1, discovered:"2025-07-05", retest:"2025-07-12" }
  ])
}
