import { useState } from 'react'
import { projects } from '@/data/projects'
import { sectionCopy } from '@/data/sectionCopy'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Tag } from '@/components/ui/Tag'
import { Reveal } from '@/components/animation/Reveal'
import { cn } from '@/utils/cn'

const categories = ['All', ...new Set(projects.map((project) => project.category))]

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const visibleProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  return (
    <Section id="projects" className="section-glow">
      <SectionHeading
        eyebrow={sectionCopy.projects.eyebrow}
        title={sectionCopy.projects.title}
        subtitle={sectionCopy.projects.subtitle}
      />
      <div className="grid gap-8 xl:grid-cols-[320px_minmax(0,1fr)] xl:items-start">
        <aside className="space-y-5 rounded-[1.75rem] border border-line/60 bg-slate-950/30 p-6">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-accent">
              Resume view
            </p>
            <h3 className="mt-3 text-xl font-semibold text-text">Projects at a glance</h3>
            <p className="mt-3 text-sm text-muted">
              Filter by focus area and use this side panel as a compact summary for your work.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  'rounded-full border px-3 py-2 text-[11px] uppercase tracking-[0.22em] transition',
                  activeCategory === category
                    ? 'border-accent/70 text-accent'
                    : 'border-line/60 text-muted hover:border-accent/50 hover:text-text'
                )}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <p className="text-[11px] uppercase tracking-[0.24em] text-muted">Current focus</p>
            <p className="mt-2 text-sm text-text">
              Building polished product experiences with strong visual detail and measurable outcomes.
            </p>
          </div>

          <div className="space-y-3">
            {visibleProjects.slice(0, 3).map((project) => (
              <div key={project.id} className="rounded-2xl border border-line/50 bg-white/5 p-3">
                <p className="text-sm font-semibold text-text">{project.title}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-muted">
                  {project.category}
                </p>
              </div>
            ))}
          </div>
        </aside>

        <div className="space-y-6">
          {visibleProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.05}>
              <Card className="overflow-hidden">
                <div className="grid gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:items-start">
                  <div className="media-frame h-56">
                    {project.video ? (
                      <video
                        className="h-full w-full object-cover"
                        src={project.video}
                        poster={project.image || '/images/project-template.svg'}
                        muted
                        loop
                        playsInline
                        autoPlay
                        preload="none"
                      />
                    ) : (
                      <img
                        src={project.image || '/images/project-template.svg'}
                        alt={`${project.title} preview`}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>

                  <div className="space-y-5">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
                          {project.category}
                        </span>
                        <span className="text-[11px] uppercase tracking-[0.3em] text-muted">
                          {project.stack[0]}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-text">{project.title}</h3>
                      <p className="text-sm text-muted">{project.summary}</p>
                    </div>

                    <div className="grid gap-3 text-sm text-muted sm:grid-cols-2">
                      <div className="rounded-2xl border border-line/50 bg-black/20 p-3">
                        <p className="text-[11px] uppercase tracking-[0.24em] text-muted">Problem</p>
                        <p className="mt-2 text-sm text-text">{project.problem}</p>
                      </div>
                      <div className="rounded-2xl border border-line/50 bg-black/20 p-3">
                        <p className="text-[11px] uppercase tracking-[0.24em] text-muted">Result</p>
                        <p className="mt-2 text-sm text-text">{project.result}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <Tag key={item}>{item}</Tag>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {project.links.map((link) => (
                        <Button key={link.label} href={link.href} variant="secondary">
                          {link.label}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
