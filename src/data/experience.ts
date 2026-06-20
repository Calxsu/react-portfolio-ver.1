import type { ExperienceItem } from '@/types'

export const experience: ExperienceItem[] = [
  {
    id: 'clsu-colloquium',
    role: 'IT Intern / Front-End Web Developer',
    company: 'CLSU DIT DSAIRe Laboratory',
    period: '2026',
    location: 'Science City of Muñoz, Nueva Ecija',
    highlights: [
      'Developed responsive student and admin interfaces for the Colloquium Application Management System.',
      'Built workflows for OTP registration, password reset, submissions, dashboards, filters, CSV export, and email notifications.',
      'Used Laravel, Livewire, Tailwind CSS, Vite, Docker, and SQLite to deliver the UI and application logic.'
    ]
  },
  {
    id: 'clsu-capstone',
    role: 'IT Intern / Full-Stack Web Developer',
    company: 'CLSU DIT DSAIRe Laboratory',
    period: '2026',
    location: 'Science City of Muñoz, Nueva Ecija',
    highlights: [
      'Completed 492 supervised OJT hours contributing to system development, QA testing, documentation, and backend/frontend coordination.',
      'Built modules for student groups, panel assignments, evaluations, checklists, data import, reports, and ETL computation.',
      'Delivered the system using Laravel, PHP, MySQL, Docker, Nginx, Vite, and Tailwind CSS.'
    ]
  },
  {
    id: 'pesolution',
    role: 'Full-Stack Web Developer',
    company: 'PESOlution',
    period: '2025',
    location: 'Remote / Project-based',
    highlights: [
      'Developed a scholarship application and renewal system with document tracking, monitoring, scheduling, and analytics.',
      'Integrated SMS and email announcement features and connected a Raspberry Pi SMS Gateway for automated messaging.',
      'Built the solution with Laravel and MySQL for maintainable workflow management.'
    ]
  }
]
