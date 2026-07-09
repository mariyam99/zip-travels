'use client'
import { useEffect } from 'react'

export default function NoInspect() {
  useEffect(() => {
    // Disable right-click
    const noContext = e => e.preventDefault()
    document.addEventListener('contextmenu', noContext)

    // Block inspect keyboard shortcuts
    const noKeys = e => {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key)) ||
        (e.ctrlKey && e.key === 'U') ||
        (e.metaKey && e.altKey && ['I', 'J', 'C'].includes(e.key)) // Mac
      ) {
        e.preventDefault()
        e.stopPropagation()
      }
    }
    document.addEventListener('keydown', noKeys)

    return () => {
      document.removeEventListener('contextmenu', noContext)
      document.removeEventListener('keydown', noKeys)
    }
  }, [])

  return null
}
