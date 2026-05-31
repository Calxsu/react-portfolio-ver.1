import { skills } from '@/data/skills'
import { sectionCopy } from '@/data/sectionCopy'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Tag } from '@/components/ui/Tag'
import { Reveal } from '@/components/animation/Reveal'

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow={sectionCopy.skills.eyebrow}
        title={sectionCopy.skills.title}
        subtitle={sectionCopy.skills.subtitle}
      />
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.05}>
            <Card className="space-y-4">
              <h3 className="text-lg font-semibold text-text">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
