"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLang } from "@/components/lang"

export default function Hero(){
  const {t} = useLang()
  return (
    <section className="container py-14">
      <motion.h1 initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} className="text-3xl md:text-5xl font-bold mb-4">
        Pentest contínuo, resposta rápida, zero surpresa.
      </motion.h1>
      <p className="opacity-80 max-w-2xl">PTaaS e Consultoria de Segurança para empresas que precisam fechar riscos com velocidade, evidências claras e reteste ágil.</p>
      <div className="mt-6 flex gap-3">
        <Link href="/contato"><Button>{t.cta1}</Button></Link>
        <Link href="/ptaas"><Button variant="outline">{t.cta2}</Button></Link>
      </div>
      <div className="mt-10 flex items-center gap-6 opacity-70">
        <img src="/clients/client1.svg" alt="Cliente 1" width={120} height={32}/>
        <img src="/clients/client2.svg" alt="Cliente 2" width={120} height={32}/>
        <img src="/clients/client3.svg" alt="Cliente 3" width={120} height={32}/>
      </div>
    </section>
  )
}
