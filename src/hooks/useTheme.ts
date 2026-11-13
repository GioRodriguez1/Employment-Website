import { useCallback, useSyncExternalStore } from 'react'

export type Theme = 'dark' | 'light'

const STORAGE_KEY = 'theme'
const listeners = new Set<() => void>()

function getTheme(): Theme {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark')
  try {
    localStorage.setItem(STORAGE_KEY, theme)
  } catch {
    // Storage unavailable (private mode etc.) — theme still applies for this visit.
  }
  listeners.forEach((l) => l())
}

/** Theme state. The initial class is set by an inline script in index.html to avoid a flash. */
export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getTheme, () => 'dark' as Theme)
  const toggleTheme = useCallback(
    () => applyTheme(getTheme() === 'dark' ? 'light' : 'dark'),
    [],
  )
  return { theme, toggleTheme }
}
