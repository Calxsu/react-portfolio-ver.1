import { sections, siteConfig } from '@/data/siteConfig'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { Button } from '@/components/ui/Button'
import { cn } from '@/utils/cn'

export function Navbar() {
  const enabledSectionIds = new Set(sections.filter((section) => section.enabled).map((section) => section.id))
  const navLinks = siteConfig.navLinks.filter((link) => enabledSectionIds.has(link.id))
  const activeId = useScrollSpy(navLinks.map((link) => link.id))

  return (
    <header className="sticky top-4 z-50">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex items-center justify-between rounded-full border border-line/60 bg-bg/80 px-5 py-3 shadow-soft backdrop-blur">
          <a href="#hero" className="flex items-center gap-3 text-sm font-semibold text-text">
            <span>{siteConfig.name}</span>
            <span className="hidden rounded-full border border-line/60 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-muted lg:inline-flex">
              {siteConfig.role}
            </span>
          </a>
          <nav className="hidden items-center gap-5 text-xs uppercase tracking-[0.2em] text-muted md:flex">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={cn(
                  'transition hover:text-text',
                  activeId === link.id && 'text-text'
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Button href="#contact" variant="secondary" className="hidden sm:inline-flex">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
