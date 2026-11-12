export default function EnquiryError({ message }) {
  if (!message) return null
  return (
    <p role="alert" style={{ color: '#ef4444', fontSize: '13px', margin: 0, background: '#fff5f5', padding: '10px 14px', borderRadius: '8px', border: '1px solid #fcc' }}>
      ⚠️ {message}
    </p>
  )
}
