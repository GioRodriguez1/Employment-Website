import { SocialLinks } from '@/components/shared/SocialLinks'
import { personal } from '@/data/personal'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t">
      <div className="text-muted-foreground mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm sm:flex-row sm:px-6">
        <p>
          © {year} {personal.name}. Built with React, TypeScript & Tailwind CSS.
        </p>
        <SocialLinks />
      </div>
    </footer>
  )
}
