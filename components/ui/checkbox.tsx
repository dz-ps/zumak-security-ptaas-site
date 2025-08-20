import * as React from "react"
export function Checkbox({checked, onChange, id}:{checked?:boolean,onChange?:(v:boolean)=>void,id?:string}){
  return (
    <label className="inline-flex items-center gap-2 cursor-pointer" htmlFor={id}>
      <input id={id} type="checkbox" className="h-4 w-4 rounded border-white/20 bg-neutral-900" checked={checked} onChange={e=>onChange?.(e.target.checked)} />
    </label>
  )
}
