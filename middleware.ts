import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest){
  const res = NextResponse.next()
  const csp = [
    "default-src 'self'",
    "img-src 'self' data: https:",
    "script-src 'self' 'unsafe-inline' https:",
    "style-src 'self' 'unsafe-inline'",
    "font-src 'self' data:",
    "connect-src 'self' https:",
    "frame-ancestors 'none'"
  ].join("; ")
  res.headers.set("Content-Security-Policy", csp)
  res.headers.set("X-Content-Type-Options", "nosniff")
  res.headers.set("Referrer-Policy", "no-referrer-when-downgrade")
  res.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()")
  res.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload")
  return res
}
