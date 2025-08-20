import type { MetadataRoute } from "next"
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  const routes = ["","/servicos","/metodologia","/planos","/cases","/blog","/sobre","/contato","/ptaas","/politica-de-privacidade","/termos-de-servico","/acordo-de-processamento-de-dados","/politica-de-divulgacao-responsavel"]
  const now = new Date().toISOString()
  return routes.map(p=>({ url: base + p, lastModified: now, changeFrequency: "weekly", priority: p===""?1:0.7 }))
}
