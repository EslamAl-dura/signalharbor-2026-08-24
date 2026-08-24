import { type ReactNode } from 'react'
import { Link } from '@tanstack/react-router'
import { Activity, Anchor, Settings as SettingsIcon, Sun, Moon, Languages } from 'lucide-react'
import { useTheme } from '../providers/theme-provider'
import { useI18n } from '../providers/i18n-provider'
import { Button } from './ui/button'

export function Layout({ children }: { children: ReactNode }) {
  const { theme, toggleTheme } = useTheme(); const { locale, setLocale, t } = useI18n()
  return <div className="min-h-screen bg-[radial-gradient(circle_at_top_right,rgba(53,208,186,.12),transparent_35%)]">
    <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
      <Link to="/" className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-ink text-mint shadow-glow dark:bg-mint dark:text-ink"><Anchor size={21}/></span><span className="text-lg font-bold tracking-tight">Signal<span className="text-ocean dark:text-mint">Harbor</span></span></Link>
      <nav className="flex items-center gap-1"><Link to="/" activeProps={{ className: 'bg-slate-200 dark:bg-white/10' }} className="rounded-lg px-3 py-2 text-sm text-slate-600 dark:text-slate-300">{t('overview')}</Link><Link to="/settings" activeProps={{ className: 'bg-slate-200 dark:bg-white/10' }} className="rounded-lg px-3 py-2 text-sm text-slate-600 dark:text-slate-300"><SettingsIcon size={16} className="inline ltr:mr-1 rtl:ml-1"/>{t('settings')}</Link><Button variant="ghost" size="sm" onClick={toggleTheme} aria-label="Toggle theme">{theme === 'dark' ? <Sun size={17}/> : <Moon size={17}/>}</Button><Button variant="ghost" size="sm" onClick={() => setLocale(locale === 'en' ? 'ar' : 'en')}><Languages size={17}/>{locale.toUpperCase()}</Button></nav>
    </header><main className="mx-auto max-w-7xl px-5 pb-12 lg:px-8">{children}</main>
  </div>
}

export function SignalBar({ label, value, color = 'bg-mint' }: { label: string; value: number; color?: string }) { return <div><div className="mb-2 flex justify-between text-sm"><span>{label}</span><strong>{value}%</strong></div><div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10"><div className={`h-full rounded-full ${color}`} style={{ width: `${value}%` }}/></div></div> }
