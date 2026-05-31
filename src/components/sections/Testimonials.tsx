import { testimonials } from '@/data/testimonials'
import { sectionCopy } from '@/data/sectionCopy'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Reveal } from '@/components/animation/Reveal'

export function Testimonials() {
  return (
    <Section id="testimonials">
      <SectionHeading
        eyebrow={sectionCopy.testimonials.eyebrow}
        title={sectionCopy.testimonials.title}
        subtitle={sectionCopy.testimonials.subtitle}
      />
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.05}>
            <Card className="space-y-4">
              <p className="text-sm text-muted">"{item.quote}"</p>
              <div>
                <p className="text-sm font-semibold text-text">{item.name}</p>
                <p className="text-xs text-muted">{item.role}</p>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
