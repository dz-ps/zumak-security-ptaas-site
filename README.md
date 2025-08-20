# Zumak Security — PTaaS & Consultoria
Site completo (Next.js 14 + TS + Tailwind) com páginas, APIs, PDF de amostra, headers de segurança, rate-limit, LGPD e Docker.

## Requisitos
- Node 18+
- pnpm (recomendado) ou npm
- Variáveis do `.env` conforme `.env.example`

## Rodando local
```bash
cp .env.example .env
pnpm i
pnpm dev
```

## Build
```bash
pnpm build && pnpm start
```

## Docker
```bash
docker build -t zumak-security .
docker run -p 3000:3000 --env-file .env zumak-security
```
Ou via docker-compose:
```bash
docker compose up --build
```

## Deploy na Vercel
- Crie novo projeto apontando para este repositório.
- Configure variáveis do `.env` no painel da Vercel.
- Deploy.

## Ajustes
- Troque logos em `public/`.
- Edite textos nas páginas em `app/`.
- Atualize contatos e WhatsApp via variáveis `NEXT_PUBLIC_WHATSAPP`, `SMTP_*`.

## Segurança
- `middleware.ts` aplica CSP/HSTS/etc.
- Rate-limit simples em `lib/rate-limit.ts`.

## QA Checklist
- Acessibilidade: foco visível, labels, contraste.
- SEO: metadata, OG, sitemap, robots.
- Performance: imagens otimizadas, iframes lazy.
- Segurança: headers, validação Zod, rate-limit.
