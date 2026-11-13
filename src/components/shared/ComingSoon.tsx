import { Link } from 'react-router'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { usePageTitle } from '@/hooks/usePageTitle'

interface ComingSoonProps {
  title: string
  description: string
}

/** Temporary page body for routes scheduled in later roadmap phases. */
export function ComingSoon({ title, description }: ComingSoonProps) {
  usePageTitle(title)
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeader
        as="h1"
        eyebrow="// in progress"
        title={title}
        description={description}
      />
      <Button variant="outline" className="mt-8" asChild>
        <Link to="/">
          <ArrowLeft /> Back home
        </Link>
      </Button>
    </section>
  )
}
