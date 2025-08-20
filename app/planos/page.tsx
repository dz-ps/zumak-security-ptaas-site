import { Button } from "@/components/ui/button"
export default function Page(){
  const planos = [
    {name:"Start", price:"R$ 4.990/mês", items:["PTaaS básico","1 escopo ativo","Reteste incluso","Relatório executivo+técnico"]},
    {name:"Pro", price:"R$ 9.990/mês", items:["PTaaS completo","3 escopos ativos","Reteste 48h","Integração GitHub/GitLab"], highlight:true},
    {name:"Enterprise", price:"Sob consulta", items:["Escopos ilimitados","SLA customizado","Relatórios sob demanda","Suporte 24/7"]},
  ]
  return (
    <div className="container py-10 grid md:grid-cols-3 gap-4">
      {planos.map(p=>(
        <div key={p.name} className={`rounded-2xl border ${p.highlight?'border-sky-500':'border-white/10'} p-5`}>
          <p className="text-xl font-bold">{p.name}</p>
          <p className="text-2xl mt-2">{p.price}</p>
          <ul className="mt-3 text-sm opacity-90 list-disc ml-5">{p.items.map(i=><li key={i}>{i}</li>)}</ul>
          <a href="/contato"><Button className="mt-4 w-full">Falar com especialista</Button></a>
        </div>
      ))}
      <div className="md:col-span-3 mt-6 text-sm opacity-80">
        <p>POC de 7 dias disponível para ambientação do PTaaS (sem testes destrutivos).</p>
      </div>
    </div>
  )
}
