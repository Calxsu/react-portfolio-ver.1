import { siteConfig } from '@/data/siteConfig'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Tag } from '@/components/ui/Tag'
import { Section } from '@/components/layout/Section'
import { Reveal } from '@/components/animation/Reveal'
import { Stagger } from '@/components/animation/Stagger'

export function Hero() {
  return (
    <Section id="hero" className="relative overflow-hidden pb-24 pt-24 sm:pt-28">
      <div className="absolute inset-0 -z-10 bg-hero-gradient" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-60" />
      <div className="absolute left-1/2 top-[-200px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px] float" />

      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <Stagger className="space-y-7">
          <Reveal>
            <Tag className="bg-surface/50 text-[11px] uppercase tracking-[0.25em] text-muted">
              {siteConfig.availability}
            </Tag>
          </Reveal>
          <Reveal>
            <h1 className="text-[clamp(2.6rem,4.8vw,4.6rem)] font-semibold leading-[1.05] text-text">
              <span className="text-gradient">{siteConfig.hero.headline}</span>
            </h1>
          </Reveal>
          <Reveal>
            <p className="max-w-xl text-base text-muted sm:text-lg">{siteConfig.hero.subheadline}</p>
          </Reveal>
          <Reveal>
            <div className="flex flex-wrap gap-3">
              <Button href={siteConfig.hero.primaryCta.href}>{siteConfig.hero.primaryCta.label}</Button>
              <Button href={siteConfig.hero.secondaryCta.href} variant="secondary">
                {siteConfig.hero.secondaryCta.label}
              </Button>
            </div>
          </Reveal>
          <Reveal>
            <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-muted">
              <span className="rounded-full border border-line/60 px-3 py-1">{siteConfig.location}</span>
              <span className="rounded-full border border-line/60 px-3 py-1">Remote friendly</span>
            </div>
          </Reveal>
        </Stagger>

        <div className="space-y-6 lg:justify-self-end">
          <Reveal>
            <Card className="space-y-4">
              <div className="media-frame h-72">
                {siteConfig.hero.portrait.src ? (
                  <img
                    src={siteConfig.hero.portrait.src}
                    alt={siteConfig.hero.portrait.alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-xs uppercase tracking-[0.25em] text-muted">
                    {siteConfig.hero.portrait.note}
                  </div>
                )}
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted">Portrait placeholder</p>
            </Card>
          </Reveal>
          <Reveal>
            <Card className="space-y-5">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted">{siteConfig.hero.focus.kicker}</p>
                <h3 className="mt-2 text-lg font-semibold text-text">{siteConfig.hero.focus.title}</h3>
                <p className="mt-2 text-sm text-muted">{siteConfig.hero.focus.description}</p>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                {siteConfig.hero.focus.facts.map((fact) => (
                  <div key={fact.label}>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted">{fact.label}</p>
                    <p className="mt-2 text-text">{fact.value}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {siteConfig.hero.focus.tags.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
