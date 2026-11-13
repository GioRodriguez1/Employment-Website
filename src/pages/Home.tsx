import { Link } from 'react-router'
import { m, type Variants } from 'motion/react'
import { ArrowRight, Download, GraduationCap, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SocialLinks } from '@/components/shared/SocialLinks'
import { personal } from '@/data/personal'
import { usePageTitle } from '@/hooks/usePageTitle'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}
const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

export default function Home() {
  usePageTitle()
  const firstName = personal.name.split(' ')[0]

  return (
    <section className="relative isolate overflow-hidden">
      {/* Subtle grid backdrop, faded toward the edges */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] mask-[radial-gradient(ellipse_at_top,black_30%,transparent_75%)] bg-size-[48px_48px] opacity-40"
      />
      <div
        aria-hidden="true"
        className="bg-primary/20 absolute top-[-10rem] left-1/2 -z-10 h-[28rem] w-[56rem] -translate-x-1/2 rounded-full blur-3xl"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[1.2fr_1fr]">
        <m.div
          variants={container}
          initial="hidden"
          animate="show"
          className="min-w-0"
        >
          <m.p
            variants={item}
            className="bg-background-secondary text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm"
          >
            <GraduationCap className="text-primary size-4" />
            {personal.degree} · {personal.graduation}
          </m.p>

          <m.h1
            variants={item}
            className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl"
          >
            Hi, I'm{' '}
            <span className="from-primary to-accent bg-linear-to-r bg-clip-text text-transparent">
              {personal.name}
            </span>
          </m.h1>

          <m.p variants={item} className="mt-4 text-lg font-medium sm:text-xl">
            {personal.headline}
          </m.p>

          <m.ul
            variants={item}
            className="text-muted-foreground mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-sm"
            aria-label="Focus areas"
          >
            {personal.focusAreas.map((area, i) => (
              <li key={area} className="flex items-center gap-3">
                {i > 0 && (
                  <span aria-hidden="true" className="text-primary">
                    |
                  </span>
                )}
                {area}
              </li>
            ))}
          </m.ul>

          <m.p variants={item} className="text-muted-foreground mt-6 max-w-xl">
            {personal.summary}
          </m.p>

          <m.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <Link to="/projects">
                View Projects <ArrowRight />
              </Link>
            </Button>
            {personal.resumeUrl && (
              <Button size="lg" variant="outline" asChild>
                <a href={personal.resumeUrl} download>
                  <Download /> Download Resume
                </a>
              </Button>
            )}
            <Button size="lg" variant="ghost" asChild>
              <Link to="/contact">
                <Mail /> Contact Me
              </Link>
            </Button>
          </m.div>

          <m.div variants={item} className="mt-6 -ml-2">
            <SocialLinks />
          </m.div>
        </m.div>

        <m.figure
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
          className="bg-background-secondary shadow-primary/5 overflow-hidden rounded-xl border shadow-2xl"
        >
          <div className="flex items-center gap-2 border-b px-4 py-3">
            <span className="size-3 rounded-full bg-red-400/80" />
            <span className="size-3 rounded-full bg-yellow-400/80" />
            <span className="size-3 rounded-full bg-green-400/80" />
            <figcaption className="text-muted-foreground ml-2 font-mono text-xs">
              about.ts
            </figcaption>
          </div>
          <pre className="overflow-x-auto p-5 font-mono text-sm leading-relaxed">
            <code>
              <Tok k>const</Tok> <Tok v>{firstName.toLowerCase()}</Tok> = {'{'}
              {'\n'}
              <Field name="school" value={`"${personal.school}"`} />
              <Field name="degree" value={`"${personal.degree}"`} />
              <Field name="graduating" value={`"${personal.graduation}"`} />
              {'  '}
              <Tok p>interests</Tok>: [{'\n'}
              {personal.interests.map((interest) => (
                <span key={interest}>
                  {'    '}
                  <Tok s>"{interest}"</Tok>,{'\n'}
                </span>
              ))}
              {'  '}],{'\n'}
              {'}'}
            </code>
          </pre>
        </m.figure>
      </div>
    </section>
  )
}

function Field({ name, value }: { name: string; value: string }) {
  return (
    <>
      {'  '}
      <Tok p>{name}</Tok>: <Tok s>{value}</Tok>,{'\n'}
    </>
  )
}

/** Minimal syntax-highlight token. */
function Tok({
  k,
  v,
  p,
  s,
  children,
}: {
  k?: boolean
  v?: boolean
  p?: boolean
  s?: boolean
  children: React.ReactNode
}) {
  const color = k
    ? 'text-purple-600 dark:text-purple-400'
    : v
      ? 'text-primary'
      : p
        ? 'text-sky-700 dark:text-sky-300'
        : s
          ? 'text-emerald-700 dark:text-emerald-400'
          : ''
  return <span className={color}>{children}</span>
}
