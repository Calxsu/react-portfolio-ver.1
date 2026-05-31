import { experience } from '@/data/experience'
import { sectionCopy } from '@/data/sectionCopy'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Reveal } from '@/components/animation/Reveal'

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow={sectionCopy.experience.eyebrow}
        title={sectionCopy.experience.title}
        subtitle={sectionCopy.experience.subtitle}
      />
      <div className="relative border-l border-line/60 pl-8">
        <div className="absolute left-0 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-accent shadow-glow" />
        <div className="space-y-8">
          {experience.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.05}>
              <Card className="relative">
                <span className="absolute -left-7 top-8 h-3 w-3 rounded-full bg-accent/70" />
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-text">{item.role}</h3>
                    <p className="text-sm text-muted">
                      {item.company} · {item.location}
                    </p>
                  </div>
                  <span className="text-xs uppercase tracking-[0.2em] text-muted">{item.period}</span>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>• {highlight}</li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
