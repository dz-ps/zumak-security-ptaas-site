import Hero from "@/components/hero"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import VulnChart from "@/components/chart-vulns"
import { JsonLd } from "@/components/seo"

export default function Page(){
  const faq = [
    {q:"O que é PTaaS?", a:"PenTest as a Service: testes contínuos com pipeline, triagem e retestes, além de relatórios claros e integráveis com seu backlog."},
    {q:"Vocês quebram produção?", a:"Nunca sem autorização. Trabalhamos com janelas, escopo e técnicas seguras. Ataques destrutivos não são feitos sem acordo formal."},
    {q:"Como é o relatório?", a:"Executivo + técnico, com PoC, evidências, CVSS e recomendações práticas. Inclui reteste incluso para validação."},
    {q:"Quais normas seguem?", a:"Alinhamos práticas à OWASP, PTES, NIST 800-115 e MITRE ATT&CK, conforme o projeto."},
    {q:"Qual o prazo de entrega?", a:"Depende do escopo. Tipicamente de 10 a 20 dias úteis para pentests pontuais e contínuo no PTaaS."},
    {q:"Vocês assinam NDA?", a:"Sim. A confidencialidade é padrão em todos os projetos."}
  ]
  const jsonld = {
    "@context":"https://schema.org",
    "@type":"Organization",
    "name":"Zumak Security",
    "url": process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
    "logo": "/logo.svg",
    "sameAs": []
  }
  const faqLd = {
    "@context":"https://schema.org",
    "@type":"FAQPage",
    "mainEntity": faq.map(i=>({ "@type":"Question", "name":i.q, "acceptedAnswer": { "@type":"Answer", "text": i.a }}))
  }
  return (
    <div>
      <Hero/>
      <section className="container grid md:grid-cols-2 gap-6">
        <Card>
          <CardTitle>PTaaS</CardTitle>
          <CardContent>
            <p className="mb-3">Ciclo contínuo: descoberta → teste → triagem → reteste → relatório. Integração com GitHub/GitLab (webhooks demo) e painel de SLA.</p>
            <VulnChart/>
          </CardContent>
        </Card>
        <Card>
          <CardTitle>Consultoria</CardTitle>
          <CardContent>
            <ul className="list-disc ml-5 space-y-1">
              <li>GRC e LGPD</li>
              <li>Hardening cloud e AppSec</li>
              <li>DFIR e resposta a incidentes</li>
            </ul>
          </CardContent>
        </Card>
      </section>
      <section className="container mt-12">
        <h2 className="text-2xl font-bold mb-4">Depoimentos</h2>
        <div className="grid md:grid-cols-3 gap-4 text-sm opacity-90">
          <blockquote className="rounded-2xl border border-white/10 p-4">“A visibilidade do PTaaS acelerou nossa correção. Reteste em poucos dias.” — Ana, CTO</blockquote>
          <blockquote className="rounded-2xl border border-white/10 p-4">“Relatórios objetivos, sem rodeios. Equipe direta e confiável.” — Bruno, Head de Segurança</blockquote>
          <blockquote className="rounded-2xl border border-white/10 p-4">“Integração com nosso backlog funcionou muito bem.” — Carla, Eng. de Plataforma</blockquote>
        </div>
      </section>
      <section className="container mt-12">
        <h2 className="text-2xl font-bold mb-4">FAQ</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {faq.map((i,idx)=>(
            <div key={idx} className="rounded-2xl border border-white/10 p-4">
              <p className="font-semibold">{i.q}</p>
              <p className="opacity-80 text-sm">{i.a}</p>
            </div>
          ))}
        </div>
      </section>
      <JsonLd json={jsonld}/>
      <JsonLd json={faqLd}/>
    </div>
  )
}
