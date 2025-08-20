import Link from "next/link"
import LanguageToggle from "@/components/lang"
export default function Navbar(){
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2 no-underline">
          <img src="/logo.svg" alt="Zumak Security" width={120} height={32} />
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/servicos" className="hover:underline">Serviços</Link>
          <Link href="/metodologia" className="hover:underline">Metodologia</Link>
          <Link href="/planos" className="hover:underline">Planos</Link>
          <Link href="/cases" className="hover:underline">Cases</Link>
          <Link href="/blog" className="hover:underline">Blog</Link>
          <Link href="/sobre" className="hover:underline">Sobre</Link>
          <Link href="/contato" className="hover:underline">Contato</Link>
          <Link href="/ptaas" className="hover:underline">PTaaS</Link>
        </nav>
        <LanguageToggle />
      </div>
    </header>
  )
}
