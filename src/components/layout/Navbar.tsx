import { sections, siteConfig } from '@/data/siteConfig'
import { socials } from '@/data/socials'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { Button } from '@/components/ui/Button'
import { IconButton } from '@/components/ui/IconButton'
import { cn } from '@/utils/cn'

export function Navbar() {
  const enabledSections = sections.filter((section) => section.enabled)
  const activeId = useScrollSpy(enabledSections.map((section) => section.id))

  return (
    <header className="sticky top-0 z-40 border-b border-line/40 bg-bg/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <div>
          <a href="#hero" className="text-sm font-semibold tracking-wide text-text">
            {siteConfig.name}
            <span className="ml-2 text-xs text-muted">{siteConfig.role}</span>
          </a>
        </div>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {enabledSections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={cn(
                'text-muted transition hover:text-text',
                activeId === section.id && 'text-text'
              )}
            >
              {section.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 lg:flex">
            {socials.map((social) => (
              <IconButton key={social.label} href={social.href} aria-label={social.label}>
                <social.icon className="h-4 w-4" />
              </IconButton>
            ))}
          </div>
          <Button href="#contact" variant="secondary" className="hidden sm:inline-flex">
            Let us talk
          </Button>
        </div>
      </div>
    </header>
  )
}
