const cases = [
  {title:"Fintech — Redução de risco em APIs", scenario:"Exposição de endpoints sensíveis.", approach:"Pentest de API + threat modeling.", results:"Redução de 60% nas falhas críticas.", quote:"“Clareza e velocidade.”"},
  {title:"E-commerce — Hardening de plataforma", scenario:"Falhas em carrinho de compras.", approach:"PTaaS + integração com backlog.", results:"Tempo de correção -45%.", quote:"“Pipeline contínuo eficiente.”"},
  {title:"SaaS — SDLC com AppSec", scenario:"Escassez de controles no CI/CD.", approach:"Review de código + controles no pipeline.", results:"Cobertura de segurança +70%.", quote:"“Suporte hands-on.”"},
]
export default function Page(){
  return (
    <div className="container py-10 grid gap-6">
      {cases.map(c=>(
        <div key={c.title} className="rounded-2xl border border-white/10 p-5">
          <h2 className="text-xl font-semibold">{c.title}</h2>
          <p className="opacity-80 text-sm mt-2">Cenário: {c.scenario}</p>
          <p className="opacity-80 text-sm">Abordagem: {c.approach}</p>
          <p className="opacity-80 text-sm">Resultados: {c.results}</p>
          <blockquote className="mt-2 opacity-90">“{c.quote}”</blockquote>
        </div>
      ))}
    </div>
  )
}
