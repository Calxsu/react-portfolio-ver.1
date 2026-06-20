import { Badge } from './Badge'

type SectionHeadingProps = {
  title: string
  subtitle: string
  eyebrow?: string
}

export function SectionHeading({ title, subtitle, eyebrow }: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-2xl">
      {eyebrow ? <Badge className="text-[11px] tracking-[0.3em]">{eyebrow}</Badge> : null}
      <h2 className="mt-4 text-[clamp(2rem,3.6vw,2.8rem)] font-semibold leading-tight text-text">
        {title}
      </h2>
      <p className="mt-4 text-base text-muted sm:text-lg">{subtitle}</p>
    </div>
  )
}
