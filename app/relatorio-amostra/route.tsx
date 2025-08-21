import { NextResponse } from "next/server"
import { pdf, Document, Page, Text, StyleSheet } from "@react-pdf/renderer"

const styles = StyleSheet.create({
  page: { padding: 24 },
  h1: { fontSize: 18, marginBottom: 8 },
  h2: { fontSize: 14, marginTop: 12, marginBottom: 6 },
  p: { fontSize: 10, marginBottom: 4 }
})

export async function GET() {
  const doc = (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.h1}>Relatório de Amostra — Zumak Security</Text>
        <Text style={styles.p}>
          Sumário executivo: este documento demonstra o formato do relatório
          entregue, incluindo matriz de risco e tabela de achados.
        </Text>
        <Text style={styles.h2}>Matriz de risco</Text>
        <Text style={styles.p}>Crítica: 2 | Alta: 5 | Média: 8 | Baixa: 6</Text>
        <Text style={styles.h2}>Findings</Text>
        <Text style={styles.p}>1. RCE em upload — CVSS 9.8 — Status: Aberto</Text>
        <Text style={styles.p}>2. SQLi — CVSS 8.6 — Status: Em correção</Text>
        <Text style={styles.p}>3. XSS refle. — CVSS 6.1 — Status: Retestado</Text>
      </Page>
    </Document>
  )

  const file = await pdf(doc).toBuffer()

  return new NextResponse(new Uint8Array(file), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=relatorio-amostra.pdf",
    },
  })
}
