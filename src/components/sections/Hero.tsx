import { siteConfig } from '@/data/siteConfig'
import { socials } from '@/data/socials'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { IconButton } from '@/components/ui/IconButton'
import { Tag } from '@/components/ui/Tag'
import { Section } from '@/components/layout/Section'
import { Reveal } from '@/components/animation/Reveal'
import { Stagger } from '@/components/animation/Stagger'

export function Hero() {
  return (
    <Section id="hero" className="relative overflow-hidden pb-20 pt-20 sm:pt-24">
      <div className="absolute inset-0 -z-10 bg-hero-gradient" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-60" />
      <div className="absolute left-1/2 top-[-200px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px] float" />

      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <Stagger className="space-y-8">
          <Reveal>
            <Tag className="bg-surface/60 text-xs uppercase tracking-[0.25em] text-muted">
              {siteConfig.availability}
            </Tag>
          </Reveal>
          <Reveal>
            <h1 className="text-4xl font-semibold leading-tight text-text sm:text-5xl lg:text-6xl">
              <span className="text-gradient">{siteConfig.hero.headline}</span>
            </h1>
          </Reveal>
          <Reveal>
            <p className="max-w-2xl text-base text-muted sm:text-lg">{siteConfig.hero.subheadline}</p>
          </Reveal>
          <Reveal>
            <div className="flex flex-wrap gap-4">
              <Button href={siteConfig.hero.primaryCta.href}>{siteConfig.hero.primaryCta.label}</Button>
              <Button href={siteConfig.hero.secondaryCta.href} variant="secondary">
                {siteConfig.hero.secondaryCta.label}
              </Button>
            </div>
          </Reveal>
          <Reveal>
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <IconButton key={social.label} href={social.href} aria-label={social.label}>
                  <social.icon className="h-4 w-4" />
                </IconButton>
              ))}
              <span className="ml-3 text-xs text-muted">{siteConfig.location}</span>
            </div>
          </Reveal>
        </Stagger>

        <Reveal className="lg:justify-self-end">
          <Card className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted">{siteConfig.hero.focus.kicker}</p>
              <h3 className="mt-2 text-xl font-semibold text-text">{siteConfig.hero.focus.title}</h3>
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
    </Section>
  )
}
