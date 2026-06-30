export default function ThemeScript() {
  const script = `
    (function() {
      try {
        const stored = localStorage.getItem('theme')
        const theme = stored || 'dark'
        if (theme === 'dark') document.documentElement.classList.add('dark')
      } catch (e) {}
    })()
  `
  return <script dangerouslySetInnerHTML={{ __html: script }} />
}