import { media } from '@/data/media'
import { sectionCopy } from '@/data/sectionCopy'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Reveal } from '@/components/animation/Reveal'

export function MediaShowcase() {
  return (
    <Section id="media" className="section-glow">
      <SectionHeading
        eyebrow={sectionCopy.media.eyebrow}
        title={sectionCopy.media.title}
        subtitle={sectionCopy.media.subtitle}
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {media.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.05}>
            <Card className="space-y-4">
              <div className="overflow-hidden rounded-2xl border border-line/40 bg-surface/40">
                {item.type === 'video' && item.src ? (
                  <video
                    className="h-44 w-full object-cover"
                    src={item.src}
                    poster={item.poster}
                    muted
                    loop
                    playsInline
                    autoPlay
                    preload="none"
                  />
                ) : item.type === 'image' && item.src ? (
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className="h-44 w-full object-cover"
                  />
                ) : (
                  <div className="flex h-44 items-center justify-center bg-surface/60 text-xs uppercase tracking-[0.25em] text-muted">
                    Add media asset
                  </div>
                )}
              </div>
              <div>
                <h3 className="text-base font-semibold text-text">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
