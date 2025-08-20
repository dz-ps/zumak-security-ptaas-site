export default function Post(){
  return (
    <article className="container prose prose-invert max-w-3xl py-10">
      <h1>Como priorizar vulnerabilidades além do CVSS</h1>
      <p>CVSS é um bom ponto de partida, mas não captura o <em>contexto</em> do seu negócio. Para priorizar de verdade, considere:</p>
      <ul>
        <li><strong>Exposição</strong>: ativo é internet-facing? Autenticação é fraca?</li>
        <li><strong>Criticidade do ativo</strong>: receita, reputação, compliance.</li>
        <li><strong>Exploitabilidade</strong>: PoC pública, automação, baixo atrito.</li>
        <li><strong>Compensações</strong>: WAF, rate limit, monitoramento.</li>
      </ul>
      <p>Monte um score composto: <code>prioridade = CVSS * exposição * criticidade * exploitabilidade / compensações</code>. Documente critérios e socialize com engenharia.</p>
      <p>Resultado: foco no que realmente queima agora, sem deixar dívidas técnicas crescerem.</p>
    </article>
  )
}
