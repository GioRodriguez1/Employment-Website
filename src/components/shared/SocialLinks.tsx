import { Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GitHubIcon, LinkedInIcon } from '@/components/shared/BrandIcons'
import { personal } from '@/data/personal'

/** Icon links for whichever profiles are configured in data/personal.ts. */
export function SocialLinks() {
  const { github, linkedin, email } = personal.links
  const items = [
    github && { href: github, label: 'GitHub', icon: <GitHubIcon /> },
    linkedin && { href: linkedin, label: 'LinkedIn', icon: <LinkedInIcon /> },
    email && { href: `mailto:${email}`, label: 'Email', icon: <Mail /> },
  ].filter(Boolean) as { href: string; label: string; icon: React.ReactNode }[]

  if (items.length === 0) return null

  return (
    <ul className="flex items-center gap-1">
      {items.map(({ href, label, icon }) => (
        <li key={label}>
          <Button variant="ghost" size="icon" asChild>
            <a
              href={href}
              aria-label={label}
              title={label}
              {...(href.startsWith('http') && {
                target: '_blank',
                rel: 'noopener noreferrer',
              })}
            >
              {icon}
            </a>
          </Button>
        </li>
      ))}
    </ul>
  )
}
