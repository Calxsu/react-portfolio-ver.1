import { siteConfig } from '@/data/siteConfig'
import { sectionCopy } from '@/data/sectionCopy'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Reveal } from '@/components/animation/Reveal'
import { Stagger } from '@/components/animation/Stagger'

export function About() {
  return (
    <Section id="about" className="section-glow">
      <SectionHeading
        eyebrow={sectionCopy.about.eyebrow}
        title={sectionCopy.about.title}
        subtitle={sectionCopy.about.subtitle}
      />
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <Stagger className="space-y-6">
          <Reveal>
            <p className="text-base text-muted sm:text-lg">{siteConfig.about.story}</p>
          </Reveal>
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-3">
              {siteConfig.stats.map((stat) => (
                <Card key={stat.label} className="p-4 text-center">
                  <p className="text-2xl font-semibold text-text">
                    {stat.value}
                    {stat.suffix}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted">{stat.label}</p>
                </Card>
              ))}
            </div>
          </Reveal>
        </Stagger>
        <div className="space-y-6">
          <Reveal>
            <Card className="space-y-4">
              <div className="media-frame h-56">
                {siteConfig.about.portrait.src ? (
                  <img
                    src={siteConfig.about.portrait.src}
                    alt={siteConfig.about.portrait.alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-xs uppercase tracking-[0.25em] text-muted">
                    {siteConfig.about.portrait.note}
                  </div>
                )}
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted">Workspace snapshot</p>
            </Card>
          </Reveal>
          <div className="space-y-4">
            {siteConfig.about.values.map((value, index) => (
              <Reveal key={value} delay={0.1 * index}>
                <Card className="p-5">
                  <p className="text-sm text-muted">{value}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
