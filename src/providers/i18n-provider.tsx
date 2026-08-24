import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

type Locale = 'en' | 'ar'
type Dictionary = Record<string, string>
const dictionaries: Record<Locale, Dictionary> = {
  en: { dashboard: 'Release cockpit', subtitle: 'A calm, explainable signal before your next deploy.', settings: 'Settings', overview: 'Overview', readiness: 'Readiness score', ready: 'GO FOR LAUNCH', investigate: 'INVESTIGATE', signals: 'Live signals', changeRisk: 'Change risk', testConfidence: 'Test confidence', rollback: 'Rollback readiness', health: 'Service health', update: 'Recalculate readiness', release: 'Release inputs', branch: 'Release branch', files: 'Changed files', duration: 'Deploy duration', save: 'Save signals', saved: 'Signals updated', language: 'Language', appearance: 'Appearance', dark: 'Dark mode', light: 'Light mode', english: 'English', arabic: 'Arabic', workspace: 'Workspace', lastChecked: 'Last checked 2 min ago' },
  ar: { dashboard: 'مركز الإصدار', subtitle: 'إشارة واضحة وهادئة قبل عملية النشر القادمة.', settings: 'الإعدادات', overview: 'نظرة عامة', readiness: 'درجة الجاهزية', ready: 'جاهز للإطلاق', investigate: 'يحتاج مراجعة', signals: 'الإشارات المباشرة', changeRisk: 'مخاطر التغيير', testConfidence: 'ثقة الاختبارات', rollback: 'جاهزية التراجع', health: 'حالة الخدمة', update: 'إعادة حساب الجاهزية', release: 'بيانات الإصدار', branch: 'فرع الإصدار', files: 'الملفات المتغيرة', duration: 'مدة النشر', save: 'حفظ الإشارات', saved: 'تم تحديث الإشارات', language: 'اللغة', appearance: 'المظهر', dark: 'الوضع الداكن', light: 'الوضع الفاتح', english: 'الإنجليزية', arabic: 'العربية', workspace: 'مساحة العمل', lastChecked: 'آخر فحص منذ دقيقتين' }
}
const I18nContext = createContext<{ locale: Locale; setLocale: (locale: Locale) => void; t: (key: string) => string } | undefined>(undefined)
export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => (localStorage.getItem('signal-locale') as Locale | null) ?? 'en')
  useEffect(() => { document.documentElement.lang = locale; document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr'; localStorage.setItem('signal-locale', locale) }, [locale])
  const t = (key: string) => dictionaries[locale][key] ?? key
  return <I18nContext.Provider value={{ locale, setLocale, t }}>{children}</I18nContext.Provider>
}
export function useI18n() { const context = useContext(I18nContext); if (!context) throw new Error('useI18n must be used within I18nProvider'); return context }
