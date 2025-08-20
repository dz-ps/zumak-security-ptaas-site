export default function WhatsAppFloat(){
  const phone = process.env.NEXT_PUBLIC_WHATSAPP || "55XXXXXXXXXXX"
  return (
    <a aria-label="WhatsApp" href={`https://wa.me/${phone}`} target="_blank" className="fixed bottom-4 right-4 z-50 rounded-full bg-green-600 px-4 py-3 text-white shadow-lg">
      WhatsApp
    </a>
  )
}
