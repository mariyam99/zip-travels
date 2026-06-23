export default function WhatsAppButton() {
  return (
    
      href="https://wa.me/94XXXXXXXXX"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        background: '#25D366',
        color: '#fff',
        width: '58px',
        height: '58px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '28px',
        boxShadow: '0 4px 20px rgba(37,211,102,0.5)',
        zIndex: 9999,
        textDecoration: 'none'
      }}
      aria-label="Chat on WhatsApp"
    >
      💬
    </a>
  )
}