import { useEffect } from 'react'
import { personal } from '@/data/personal'

export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} | ${personal.name}` : personal.name
  }, [title])
}
