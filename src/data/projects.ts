import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'colloquium-system',
    title: 'Colloquium Application Management System',
    summary: 'Built responsive student and admin workflows for applications, resubmissions, dashboards, filters, and email notifications.',
    problem: 'The lab needed a practical system to manage colloquium-related applications and administrative workflows in one place.',
    result: 'Delivered an organized Laravel-based platform with role-aware interfaces, reporting tools, and streamlined admin operations.',
    category: 'Academic',
    stack: ['Laravel', 'Livewire', 'Tailwind CSS', 'Vite', 'Docker', 'SQLite'],
    image: '/images/project-template.svg',
    video: '',
    links: [
      { label: 'Resume', href: '#', type: 'case' },
      { label: 'Repository', href: '#', type: 'repo' }
    ]
  },
  {
    id: 'capstone-management',
    title: 'Capstone Management System',
    summary: 'Contributed to a full internship system for managing student groups, panel assignments, evaluations, imports, reports, and ETL computation.',
    problem: 'The team needed a centralized platform for capstone project administration and evaluation workflows.',
    result: 'Supported full-stack delivery through backend logic, QA testing, documentation, and coordinated frontend/backend development.',
    category: 'Academic',
    stack: ['Laravel', 'PHP', 'MySQL', 'Docker', 'Nginx', 'Tailwind CSS'],
    image: '/images/project-template.svg',
    video: '',
    links: [
      { label: 'Resume', href: '#', type: 'case' },
      { label: 'Repository', href: '#', type: 'repo' }
    ]
  },
  {
    id: 'pesolution-system',
    title: 'PESOlution Scholarship Application & Renewal System',
    summary: 'Developed a scholarship platform for applications, renewals, document tracking, monitoring, scheduling, and analytics.',
    problem: 'The process required better tracking and communication for scholarship applicants and administrators.',
    result: 'Delivered a workflow-based system with alerts, appointment scheduling, and automated SMS/email announcements.',
    category: 'System',
    stack: ['Laravel', 'MySQL', 'PHP', 'Raspberry Pi', 'SMS Gateway'],
    image: '/images/project-template.svg',
    video: '',
    links: [
      { label: 'Resume', href: '#', type: 'case' },
      { label: 'Repository', href: '#', type: 'repo' }
    ]
  },
  {
    id: 'online-chat',
    title: 'Online Chat Application',
    summary: 'Built a browser-based chat app with authentication, near real-time messaging, message history, and user status indicators.',
    problem: 'The project needed a simple but responsive communication platform for real-time interaction.',
    result: 'Delivered a clean desktop/mobile UI with registration, authentication, and messaging features.',
    category: 'Web App',
    stack: ['PHP', 'MySQL', 'jQuery', 'Bootstrap'],
    image: '/images/project-template.svg',
    video: '',
    links: [
      { label: 'Resume', href: '#', type: 'case' },
      { label: 'Repository', href: '#', type: 'repo' }
    ]
  },
  {
    id: 'deja-brew',
    title: 'Deja Brew Order & Event Ticketing System',
    summary: 'Implemented product management, order processing, event scheduling, reservations, and role-based access for a cafe-style business workflow.',
    problem: 'The business needed a simpler way to manage orders, events, and ticket reservations across roles.',
    result: 'Delivered a responsive system covering admin, staff, and customer workflows in one interface.',
    category: 'Business',
    stack: ['PHP', 'MySQL', 'Responsive UI', 'Role Access'],
    image: '/images/project-template.svg',
    video: '',
    links: [
      { label: 'Resume', href: '#', type: 'case' },
      { label: 'Repository', href: '#', type: 'repo' }
    ]
  }
]
