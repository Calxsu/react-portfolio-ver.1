import { Badge } from './Badge'

type SectionHeadingProps = {
  title: string
  subtitle: string
  eyebrow?: string
}

export function SectionHeading({ title, subtitle, eyebrow }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-2xl">
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <h2 className="mt-4 text-3xl font-semibold text-text sm:text-4xl">{title}</h2>
      <p className="mt-3 text-base text-muted sm:text-lg">{subtitle}</p>
    </div>
  )
}
