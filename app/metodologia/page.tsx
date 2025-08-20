export default function Page(){
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-4">Metodologia</h1>
      <p className="opacity-90">Alinhamos nossa execução a guias reconhecidos: OWASP Testing Guide v5, PTES, NIST 800-115 e MITRE ATT&CK. Priorizamos risco baseado em impacto e probabilidade, com CVSS v3.1, triagem clara e reteste documentado.</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">SLA de Correção</h2>
      <table className="w-full text-sm">
        <thead><tr className="text-left opacity-70"><th>Severidade</th><th>Prazo de correção</th></tr></thead>
        <tbody className="[&>tr>*]:py-2">
          <tr><td>Crítica</td><td>até 3 dias úteis</td></tr>
          <tr><td>Alta</td><td>até 7 dias úteis</td></tr>
          <tr><td>Média</td><td>até 15 dias úteis</td></tr>
          <tr><td>Baixa</td><td>até 30 dias úteis</td></tr>
        </tbody>
      </table>
    </div>
  )
}
