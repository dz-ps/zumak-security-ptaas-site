'use client'
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

export default function Page(){
  const [lgpd, setLgpd] = useState(false)
  const [loading, setLoading] = useState(false)
  const [ok, setOk] = useState<string|null>(null)
  async function submit(e: React.FormEvent){
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const data = Object.fromEntries(new FormData(form) as any)
    setLoading(true); setOk(null)
    const res = await fetch("/api/contato", { method:"POST", headers:{'content-type':'application/json'}, body: JSON.stringify({...data, lgpd, recaptchaToken: 'test'}) })
    const j = await res.json()
    setLoading(false)
    setOk(res.ok? "Enviado com sucesso!" : (j.error || "Erro ao enviar"))
  }
  return (
    <div className="container py-10 grid md:grid-cols-2 gap-8">
      <form onSubmit={submit} className="grid gap-3">
        <Input name="nome" placeholder="Nome*" required aria-label="Nome"/>
        <Input name="email" placeholder="E-mail*" type="email" required aria-label="E-mail"/>
        <Input name="empresa" placeholder="Empresa" aria-label="Empresa"/>
        <Input name="telefone" placeholder="Telefone/WhatsApp" aria-label="Telefone/WhatsApp"/>
        <Input name="site" placeholder="Site/App alvo (https://...)" aria-label="Site/App alvo"/>
        <Textarea name="mensagem" placeholder="Mensagem*" required aria-label="Mensagem"/>
        <label className="flex items-start gap-2 text-sm">
          <Checkbox id="lgpd" checked={lgpd} onChange={setLgpd}/>
          <span>Li e concordo com a <a className="underline" href="/politica-de-privacidade" target="_blank">Política de Privacidade</a></span>
        </label>
        <Button disabled={!lgpd || loading} type="submit">{loading? "Enviando..." : "Enviar proposta"}</Button>
        {ok && <p className="text-sm">{ok}</p>}
      </form>
      <div className="grid gap-4">
        <iframe loading="lazy" className="w-full h-60 rounded-2xl border border-white/10" src="https://calendly.com/your-placeholder"></iframe>
        <iframe loading="lazy" className="w-full h-60 rounded-2xl border border-white/10" src="https://maps.google.com/maps?q=Vit%C3%B3ria%20ES&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
      </div>
    </div>
  )
}
