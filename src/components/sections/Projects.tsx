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
      <div className="mb-8 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              'rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition',
              activeCategory === category
                ? 'border-accent/70 text-accent'
                : 'border-line/60 text-muted hover:border-accent/50 hover:text-text'
            )}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        {visibleProjects.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.05}>
            <Card className="space-y-5">
              <div className="relative overflow-hidden rounded-2xl border border-line/40 bg-surface/40">
                {project.video ? (
                  <video
                    className="h-48 w-full object-cover"
                    src={project.video}
                    poster={project.image}
                    muted
                    loop
                    playsInline
                    autoPlay
                    preload="none"
                  />
                ) : project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-48 w-full object-cover"
                  />
                ) : (
                  <div className="flex h-48 items-center justify-center bg-surface/60 text-xs uppercase tracking-[0.25em] text-muted">
                    Add preview media
                  </div>
                )}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-text">{project.title}</h3>
                <p className="mt-2 text-sm text-muted">{project.summary}</p>
              </div>
              <div className="grid gap-3 text-sm text-muted">
                <p>
                  <span className="text-text">Problem:</span> {project.problem}
                </p>
                <p>
                  <span className="text-text">Result:</span> {project.result}
                </p>
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
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
