import { Card, CardContent, CardTitle } from "@/components/ui/card"

const services = [
  { name: "PTaaS", desc: "Teste contínuo com pipeline, SLA e retestes incluídos.", align:"OWASP, PTES" },
  { name: "Pentest Web/API/Mobile/Cloud", desc: "Testes sob medida cobrindo camadas de aplicação e cloud.", align:"OWASP, NIST 800-115" },
  { name: "Red Team/Adversary Emulation", desc: "Simulação tática baseada em MITRE ATT&CK.", align:"ATT&CK, OSSTMM" },
  { name: "Code Review/Threat Modeling", desc: "Segurança no SDLC com revisão e modelagem de ameaças.", align:"OWASP SAMM" },
  { name: "Consultoria LGPD", desc: "Mapeamento de dados, políticas, DPA e DPIA.", align:"LGPD" },
  { name: "DFIR", desc: "Detecção e resposta, coleta de evidências e contenção.", align:"NIST" }
]

export default function Page(){
  return (
    <div className="container py-10 grid md:grid-cols-2 gap-4">
      {services.map((s)=>(
        <Card key={s.name}>
          <CardTitle>{s.name}</CardTitle>
          <CardContent>
            <p className="mb-2">{s.desc}</p>
            <p className="text-xs opacity-70">Alinhamentos: {s.align}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
