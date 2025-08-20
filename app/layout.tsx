import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"
import WhatsAppFloat from "@/components/whatsapp-float"
import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"),
  title: "Zumak Security — PTaaS e Consultoria de Segurança",
  description: "Pentest contínuo, resposta rápida, zero surpresa. PTaaS e consultoria de segurança da informação para o mercado brasileiro.",
  openGraph: {
    title: "Zumak Security",
    description: "PTaaS e Consultoria de Segurança",
    images: ["/og.jpg"]
  },
  robots: { index: true, follow: true }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
        <CookieBanner/>
        <WhatsAppFloat/>
        {/* Umami (placeholder) */}
        {process.env.UMAMI_WEBSITE_ID ? <script async defer data-website-id={process.env.UMAMI_WEBSITE_ID} src={process.env.UMAMI_SRC || ""}></script> : null}
      </body>
    </html>
  )
}
