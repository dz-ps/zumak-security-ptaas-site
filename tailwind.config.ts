import type { Config } from "tailwindcss"
const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["Inter", "ui-sans-serif", "system-ui"] },
      borderRadius: { '2xl': '1rem' }
    }
  },
  plugins: []
}
export default config
