import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

type Theme = 'light' | 'dark'
type ThemeContextValue = { theme: Theme; setTheme: (theme: Theme) => void; toggleTheme: () => void }
const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem('signal-theme') as Theme | null) ?? 'dark')
  useEffect(() => { document.documentElement.classList.toggle('dark', theme === 'dark'); localStorage.setItem('signal-theme', theme) }, [theme])
  return <ThemeContext.Provider value={{ theme, setTheme, toggleTheme: () => setTheme(theme === 'dark' ? 'light' : 'dark') }}>{children}</ThemeContext.Provider>
}
export function useTheme() { const context = useContext(ThemeContext); if (!context) throw new Error('useTheme must be used within ThemeProvider'); return context }
