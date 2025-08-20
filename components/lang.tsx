"use client"
import { useEffect, useState } from "react"

const dict = {
  pt: { cta1: "Agendar Diagnóstico", cta2:"Testar o PTaaS" },
  en: { cta1: "Schedule Assessment", cta2:"Try PTaaS" }
}
export function useLang(){
  const [lang,setLang] = useState<'pt'|'en'>('pt')
  useEffect(()=>{
    const stored = localStorage.getItem("lang") as 'pt'|'en'|null
    if(stored) setLang(stored)
  },[])
  const t = dict[lang]
  return {lang, setLang:(l:'pt'|'en')=>{localStorage.setItem("lang", l); setLang(l)}, t}
}
export default function LanguageToggle(){
  const {lang,setLang} = useLang()
  return (
    <button aria-label="Alternar idioma" className="text-xs opacity-80 hover:opacity-100" onClick={()=>setLang(lang==='pt'?'en':'pt')}>
      {lang.toUpperCase()}
    </button>
  )
}
