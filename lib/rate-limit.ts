const hits = new Map<string, {count:number, ts:number}>()
export function rateLimit(key:string, limit=30, windowMs=60_000){
  const now = Date.now()
  const item = hits.get(key)
  if(!item || now - item.ts > windowMs){
    hits.set(key, {count:1, ts:now})
    return { ok: true }
  }
  item.count++
  if(item.count > limit) return { ok:false }
  return { ok:true }
}
