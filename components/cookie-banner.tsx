"use client"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
export default function CookieBanner(){
  const [show, setShow] = useState(false)
  useEffect(()=>{
    const ok = localStorage.getItem("cookie-ok")
    if(!ok) setShow(true)
  },[])
  if(!show) return null
  return (
    <div role="dialog" aria-label="Aviso de cookies" className="fixed bottom-0 left-0 right-0 z-40 bg-black/80 backdrop-blur border-t border-white/10">
      <div className="container py-3 flex items-center justify-between gap-4">
        <p className="text-sm">Usamos cookies analíticos (Umami). Ao continuar, você concorda com a nossa política de cookies.</p>
        <Button onClick={()=>{localStorage.setItem('cookie-ok','1'); setShow(false)}}>Aceitar</Button>
      </div>
    </div>
  )
}
