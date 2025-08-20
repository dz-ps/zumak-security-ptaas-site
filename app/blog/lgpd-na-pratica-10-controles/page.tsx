export default function Post(){
  return (
    <article className="container prose prose-invert max-w-3xl py-10">
      <h1>LGPD na prática para startups: 10 controles rápidos</h1>
      <ol>
        <li>Inventário de dados pessoais e bases legais.</li>
        <li>Política de privacidade clara e acessível.</li>
        <li>Registro de consentimento e preferência.</li>
        <li>DPA com fornecedores críticos.</li>
        <li>Controle de acesso mínimo (least privilege).</li>
        <li>Criptografia em trânsito e em repouso.</li>
        <li>Backups testados e restauração documentada.</li>
        <li>Resposta a incidentes com playbooks.</li>
        <li>Registro de solicitações de titulares (DSAR).</li>
        <li>Segurança no SDLC (lint, SCA, SAST, revisão).</li>
      </ol>
      <p>Comece simples, mensure e evolua. O objetivo é reduzir risco real sem paralisar o produto.</p>
    </article>
  )
}
