import { sections, siteConfig } from '@/data/siteConfig'
import { socials } from '@/data/socials'
import { Container } from '@/components/layout/Container'

export function Footer() {
  const enabledSections = sections.filter((section) => section.enabled)
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line/40 py-10">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-text">{siteConfig.name}</p>
            <p className="text-xs text-muted">{siteConfig.tagline}</p>
          </div>
          <nav className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.2em] text-muted">
            {enabledSections.map((section) => (
              <a key={section.id} href={`#${section.id}`} className="hover:text-text">
                {section.label}
              </a>
            ))}
          </nav>
          <div className="flex gap-3 text-xs text-muted">
            {socials.map((social) => (
              <a key={social.label} href={social.href} className="hover:text-text">
                {social.label}
              </a>
            ))}
          </div>
        </div>
        <p className="mt-8 text-xs text-muted">Copyright {year} {siteConfig.name}. All rights reserved.</p>
      </Container>
    </footer>
  )
}
