import { services } from '@/data/services'
import { sectionCopy } from '@/data/sectionCopy'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Tag } from '@/components/ui/Tag'
import { Reveal } from '@/components/animation/Reveal'

export function Services() {
  return (
    <Section id="services">
      <SectionHeading
        eyebrow={sectionCopy.services.eyebrow}
        title={sectionCopy.services.title}
        subtitle={sectionCopy.services.subtitle}
      />
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service, index) => (
          <Reveal key={service.id} delay={index * 0.05}>
            <Card className="space-y-4">
              <h3 className="text-lg font-semibold text-text">{service.title}</h3>
              <p className="text-sm text-muted">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
