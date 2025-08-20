import * as React from "react"
export function Card({children}:{children: React.ReactNode}){
  return <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow">{children}</div>
}
export function CardTitle({children}:{children: React.ReactNode}){
  return <h3 className="text-lg font-semibold mb-2">{children}</h3>
}
export function CardContent({children}:{children: React.ReactNode}){
  return <div className="text-sm text-neutral-300">{children}</div>
}
