import { siteConfig } from '@/data/siteConfig'
import { socials } from '@/data/socials'
import { sectionCopy } from '@/data/sectionCopy'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { IconButton } from '@/components/ui/IconButton'
import { Reveal } from '@/components/animation/Reveal'

export function Contact() {
  return (
    <Section id="contact">
      <SectionHeading
        eyebrow={sectionCopy.contact.eyebrow}
        title={siteConfig.contact.headline}
        subtitle={siteConfig.contact.description}
      />
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <Card className="space-y-6">
            <form className="space-y-4">
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-muted" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-2xl border border-line/60 bg-transparent px-4 py-3 text-sm text-text outline-none transition focus:border-accent/70"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-muted" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-2xl border border-line/60 bg-transparent px-4 py-3 text-sm text-text outline-none transition focus:border-accent/70"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-muted" htmlFor="project">
                  Project details
                </label>
                <textarea
                  id="project"
                  name="project"
                  rows={4}
                  placeholder="Tell me about the product, timeline, and goals"
                  className="mt-2 w-full rounded-2xl border border-line/60 bg-transparent px-4 py-3 text-sm text-text outline-none transition focus:border-accent/70"
                />
              </div>
              <Button type="submit">Send inquiry</Button>
            </form>
          </Card>
        </Reveal>
        <div className="space-y-6">
          <Reveal>
            <Card className="space-y-4">
              <p className="text-xs uppercase tracking-[0.2em] text-muted">Direct</p>
              <p className="text-lg font-semibold text-text">{siteConfig.contact.email}</p>
              <p className="text-sm text-muted">{siteConfig.contact.helper}</p>
              <div className="flex gap-3">
                {socials.map((social) => (
                  <IconButton key={social.label} href={social.href} aria-label={social.label}>
                    <social.icon className="h-4 w-4" />
                  </IconButton>
                ))}
              </div>
            </Card>
          </Reveal>
          <Reveal>
            <Card className="space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] text-muted">Availability</p>
              <p className="text-sm text-muted">{siteConfig.availability}</p>
              <p className="text-xs text-muted">Avg. response time: 1-2 business days.</p>
            </Card>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
