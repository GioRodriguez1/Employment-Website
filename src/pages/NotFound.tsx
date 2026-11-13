import { Link } from 'react-router'
import { Button } from '@/components/ui/button'
import { usePageTitle } from '@/hooks/usePageTitle'

export default function NotFound() {
  usePageTitle('Page not found')
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-start px-4 py-24 sm:px-6">
      <p className="text-primary font-mono text-sm">404</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">
        Page not found
      </h1>
      <p className="text-muted-foreground mt-4">
        The page you're looking for doesn't exist or has moved.
      </p>
      <Button className="mt-8" asChild>
        <Link to="/">Go home</Link>
      </Button>
    </section>
  )
}
