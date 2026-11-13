interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  as?: 'h1' | 'h2'
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  as: Heading = 'h2',
}: SectionHeaderProps) {
  return (
    <header className="max-w-2xl">
      {eyebrow && <p className="text-primary font-mono text-sm">{eyebrow}</p>}
      <Heading className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </Heading>
      {description && (
        <p className="text-muted-foreground mt-4 text-lg">{description}</p>
      )}
    </header>
  )
}
