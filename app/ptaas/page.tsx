'use client'
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export default function Page(){
  const [items, setItems] = useState<any[]>([])
  async function load(){ const res = await fetch("/api/ptaas/findings", {cache:"no-store"}); setItems(await res.json()) }
  useEffect(()=>{ load() },[])
  async function retest(id:number){
    await fetch("/api/ptaas/retest",{method:"POST"})
    alert("Reteste agendado para o item "+id)
    load()
  }
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-4">Portal do Cliente (demo)</h1>
      <p className="opacity-80 mb-4">Pipeline: descoberta → teste → triagem → reteste → relatório</p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead><tr className="text-left opacity-70"><th>ID</th><th>Severidade</th><th>Título</th><th>Status</th><th>CVSS</th><th>Ações</th></tr></thead>
          <tbody>
            {items.map(i=> (
              <tr key={i.id} className="[&>*]:py-2 border-b border-white/5">
                <td>{i.id}</td><td>{i.severity}</td><td>{i.title}</td><td>{i.status}</td><td>{i.cvss}</td>
                <td><Button size="sm" variant="outline" onClick={()=>retest(i.id)}>Reteste 1-click</Button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <a href="/relatorio-amostra" className="inline-block mt-6"><Button>Baixar Relatório de Amostra (PDF)</Button></a>
      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-2">Webhooks (demo)</h2>
        <p className="text-sm opacity-80">Configure seu repositório para enviar eventos para <code>/api/webhook/github</code> ou <code>/api/webhook/gitlab</code> (endpoint mock).</p>
      </section>
    </div>
  )
}
