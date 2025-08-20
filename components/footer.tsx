export default function Footer(){
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="container py-8 grid md:grid-cols-3 gap-6 text-sm">
        <div>
          <p className="font-semibold">Zumak Security</p>
          <p className="opacity-80">Vitória - ES, Brasil</p>
          <p className="opacity-80">security@zumaksecurity.com</p>
        </div>
        <div>
          <p className="font-semibold">Páginas</p>
          <ul className="opacity-80 space-y-1">
            <li><a href="/politica-de-privacidade">Política de Privacidade</a></li>
            <li><a href="/termos-de-servico">Termos de Serviço</a></li>
            <li><a href="/acordo-de-processamento-de-dados">DPA</a></li>
            <li><a href="/politica-de-divulgacao-responsavel">VDP</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Alinhamentos</p>
          <div className="flex gap-2 mt-2 opacity-80">
            <span className="rounded-full border border-white/10 px-2 py-0.5 text-xs">OWASP</span>
            <span className="rounded-full border border-white/10 px-2 py-0.5 text-xs">PTES</span>
            <span className="rounded-full border border-white/10 px-2 py-0.5 text-xs">ISO 27001</span>
          </div>
        </div>
      </div>
      <div className="py-4 text-center text-xs opacity-70">© {new Date().getFullYear()} Zumak Security. Todos os direitos reservados.</div>
    </footer>
  )
}
