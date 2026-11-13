import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { m, type Variants } from 'motion/react'
import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  FolderGit2,
  GraduationCap,
  type LucideIcon,
  NotebookPen,
} from 'lucide-react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { certifications } from '@/data/certifications'
import { personal } from '@/data/personal'
import { usePageTitle } from '@/hooks/usePageTitle'
import { cn } from '@/lib/utils'
import type { CertificationStatus } from '@/types/certification'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}
const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

const explore: {
  to: string
  label: string
  description: string
  icon: LucideIcon
}[] = [
  {
    to: '/projects',
    label: 'Projects',
    description: 'Mobile, full-stack, and AI projects I’ve built.',
    icon: FolderGit2,
  },
  {
    to: '/experience',
    label: 'Experience',
    description: 'Cybersecurity risk management and IT roles.',
    icon: BriefcaseBusiness,
  },
  {
    to: '/coursework',
    label: 'Coursework',
    description: 'Computer Science and Mathematics courses.',
    icon: NotebookPen,
  },
]

const statusLabel: Record<CertificationStatus, string> = {
  earned: 'Earned',
  'in-progress': 'In progress',
}

export default function About() {
  usePageTitle('About')
  const otherInterests = personal.interests.filter(
    (i) => !personal.primaryInterests.includes(i),
  )

  return (
    <m.div
      variants={container}
      initial="hidden"
      animate="show"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20"
    >
      {/* Intro */}
      <m.section variants={item}>
        <SectionHeader as="h1" eyebrow="// about me" title="About" />
        <div className="text-muted-foreground mt-6 max-w-3xl space-y-4 text-lg leading-relaxed">
          {personal.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </m.section>

      {/* Education + certifications */}
      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <m.div variants={item}>
          <Card title="Education" icon={GraduationCap}>
            <p className="text-lg font-semibold">{personal.school}</p>
            <p className="text-muted-foreground">{personal.degree}</p>
            <dl className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {personal.standing && (
                <Stat label="Standing" value={personal.standing} />
              )}
              {personal.gpa && <Stat label="GPA" value={personal.gpa} />}
              <Stat label="Expected graduation" value={personal.graduation} />
            </dl>
          </Card>
        </m.div>

        <m.div variants={item}>
          <Card title="Certifications" icon={Award}>
            <ul className="divide-border divide-y">
              {certifications.map((cert) => (
                <li
                  key={cert.name}
                  className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 py-4 first:pt-0 last:pb-0"
                >
                  <div>
                    <p className="font-semibold">
                      {cert.url ? (
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary hover:underline"
                        >
                          {cert.name}
                        </a>
                      ) : (
                        cert.name
                      )}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {cert.issuer}
                      {cert.date && ` · ${cert.date}`}
                    </p>
                  </div>
                  <span
                    className={cn(
                      'rounded-full border px-2.5 py-0.5 text-xs font-medium',
                      cert.status === 'earned'
                        ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400'
                        : 'border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-400',
                    )}
                  >
                    {statusLabel[cert.status]}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </m.div>
      </div>

      {/* Interests */}
      <m.section
        variants={item}
        aria-labelledby="interests-title"
        className="mt-14"
      >
        <h2 id="interests-title" className="text-2xl font-semibold">
          Interests
        </h2>
        <p className="text-muted-foreground mt-2">
          Where I’m focusing my career, and the areas I enjoy building in.
        </p>
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Primary focus">
          {personal.primaryInterests.map((interest) => (
            <li
              key={interest}
              className="bg-primary text-primary-foreground rounded-full px-4 py-1.5 text-sm font-medium"
            >
              {interest}
            </li>
          ))}
        </ul>
        <ul className="mt-3 flex flex-wrap gap-2" aria-label="Other interests">
          {otherInterests.map((interest) => (
            <li
              key={interest}
              className="bg-background-secondary text-muted-foreground rounded-full border px-4 py-1.5 text-sm"
            >
              {interest}
            </li>
          ))}
        </ul>
      </m.section>

      {/* Explore */}
      <m.section
        variants={item}
        aria-labelledby="explore-title"
        className="mt-14"
      >
        <h2 id="explore-title" className="text-2xl font-semibold">
          Keep exploring
        </h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-3">
          {explore.map(({ to, label, description, icon: Icon }) => (
            <li key={to}>
              <Link
                to={to}
                className="group bg-background-secondary hover:border-primary/60 flex h-full flex-col rounded-xl border p-5 transition-colors"
              >
                <Icon className="text-primary size-5" aria-hidden="true" />
                <span className="mt-3 flex items-center gap-1 font-semibold">
                  {label}
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
                <span className="text-muted-foreground mt-1 text-sm">
                  {description}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </m.section>
    </m.div>
  )
}

function Card({
  title,
  icon: Icon,
  children,
}: {
  title: string
  icon: LucideIcon
  children: ReactNode
}) {
  return (
    <section className="bg-background-secondary h-full rounded-xl border p-6">
      <h2 className="text-muted-foreground mb-5 flex items-center gap-2 text-sm font-medium tracking-wide uppercase">
        <Icon className="text-primary size-4" aria-hidden="true" />
        {title}
      </h2>
      {children}
    </section>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-muted-foreground text-xs">{label}</dt>
      <dd className="mt-1 font-mono text-lg font-medium">{value}</dd>
    </div>
  )
}
