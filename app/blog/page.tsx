import Link from "next/link"

const posts = [
  {
    slug: "ptaas-vs-pentest-tradicional",
    title: "PTaaS vs Pentest tradicional: quando usar cada um",
    excerpt: "Entenda as diferenças práticas e como decidir."
  },
  {
    slug: "priorizacao-alem-do-cvss",
    title: "Como priorizar vulnerabilidades além do CVSS",
    excerpt: "Risk-based, contexto de negócio e exposição."
  },
  {
    slug: "lgpd-na-pratica-10-controles",
    title: "LGPD na prática para startups: 10 controles rápidos",
    excerpt: "Checklist objetivo para começar."
  }
]

export default function Page() {
  return (
    <div className="container py-10 grid gap-4">
      {posts.map((p) => (
        <Link
          key={p.slug}
          href={{ pathname: "/blog/[slug]", query: { slug: p.slug } }}
          className="rounded-2xl border border-white/10 p-5 no-underline hover:bg-white/5"
        >
          <h2 className="text-xl font-semibold">{p.title}</h2>
          <p className="opacity-80 text-sm">{p.excerpt}</p>
        </Link>
      ))}
    </div>
  )
}
