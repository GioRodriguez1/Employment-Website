# Personal Portfolio — Giovanny Rodriguez

A modern, interactive personal portfolio built with React, TypeScript, and Tailwind CSS.

This application showcases my academic coursework, software engineering projects, cybersecurity experience, technical skills, and professional background.

The goal is to create a centralized platform where recruiters, employers, and other developers can explore my technical experience and the projects I've worked on.

---

## 👨‍💻 About Me

I'm **Giovanny Rodriguez**, a Computer Science student at the **University of Wisconsin–Madison**, expecting to graduate in **Spring 2027**.

My interests include:

- Software Engineering
- Cybersecurity
- Full-Stack Development
- Artificial Intelligence
- IT Infrastructure
- Cloud Computing
- Automation

I have professional experience in cybersecurity risk management, IT operations, endpoint security, and technical support.

This portfolio documents my academic and professional journey while demonstrating my software development skills.

---

## 🚀 Project Goals

The primary goals of this portfolio are to:

1. Showcase my software development projects.
2. Highlight my cybersecurity and IT experience.
3. Document relevant Computer Science coursework.
4. Demonstrate my technical skills through real projects.
5. Provide recruiters with an accessible overview of my qualifications.
6. Create a maintainable application that can grow throughout my career.
7. Demonstrate my ability to develop and deploy a modern React application.

The application should be professional, responsive, accessible, and easy to navigate.

---

## 🛠️ Technology Stack

### Frontend

| Technology | Purpose |
|------------|---------|
| React | Frontend UI framework |
| TypeScript | Type-safe application development |
| Vite | Development server and build tooling |
| Tailwind CSS | Utility-first styling |
| shadcn/ui | Reusable UI components |
| Motion | Animations and transitions |
| React Router | Client-side routing |
| Lucide React | Icons |

### Development Tools

| Tool | Purpose |
|------|---------|
| Git | Version control |
| GitHub | Source code hosting |
| VS Code | Development environment |
| Claude | AI-assisted development |
| ESLint | Code quality |
| Prettier | Code formatting |

### Deployment

The application will be deployed using **GitHub Pages**.

The initial version will be a frontend-only application.

Portfolio information will be stored in structured TypeScript files.

A backend may be introduced later if additional functionality requires one.

---

# 🎨 Design System

## Design Philosophy

The portfolio should have a modern, minimalist developer aesthetic.

The design should prioritize:

- Professional appearance
- Clean typography
- Clear navigation
- Responsive layouts
- Subtle animations
- Accessibility
- Fast loading times
- Consistent spacing
- Reusable components

Avoid excessive animations, cluttered layouts, or unnecessary visual effects.

## Color Palette

### Dark Theme (Default)

| Element | Color |
|---------|-------|
| Primary Background | `#0B1120` |
| Secondary Background | `#111827` |
| Card Background | `#1F2937` |
| Primary Accent | `#3B82F6` |
| Secondary Accent | `#60A5FA` |
| Primary Text | `#F9FAFB` |
| Secondary Text | `#9CA3AF` |
| Borders | `#374151` |

### Light Theme

| Element | Color |
|---------|-------|
| Primary Background | `#FFFFFF` |
| Secondary Background | `#F8FAFC` |
| Card Background | `#F1F5F9` |
| Primary Accent | `#2563EB` |
| Primary Text | `#111827` |
| Secondary Text | `#64748B` |

## Typography

Recommended fonts:

- Inter
- Geist
- JetBrains Mono (for code-related elements)

## UI Components

Reusable components should include:

- Navbar
- Footer
- ThemeToggle
- ProjectCard
- ExperienceCard
- CourseCard
- SkillBadge
- SectionHeader
- SearchBar
- FilterControls
- Timeline
- Button
- Modal
- LoadingState

All components should support responsive layouts.

---

# 📄 Application Pages

The application will contain the following primary pages.

## 1. Home (`/`)

The homepage serves as the primary landing page.

### Features

- Hero section
- Name and professional introduction
- Animated introduction
- Featured projects
- Professional experience preview
- Technical skills preview
- Resume download button
- Contact links
- Call-to-action buttons

### Hero Content

**Giovanny Rodriguez**

Computer Science Student @ University of Wisconsin–Madison

Software Development | Cybersecurity | IT

### Hero Actions

- View Projects
- Download Resume
- Contact Me

The homepage should immediately communicate my technical background and interests.

---

## 2. About (`/about`)

The About page provides additional information about my background.

### Content

- Personal introduction
- Education
- Career interests
- Technical interests
- Academic background
- Professional development
- Certifications

### Education

**University of Wisconsin–Madison**

Bachelor of Science in Computer Science

Expected Graduation: Spring 2027

### Potential Features

- Education timeline
- Career timeline
- Academic highlights
- Certification cards
- Personal interests section

---

## 3. Experience (`/experience`)

This page showcases my professional work experience.

Each position should have a dedicated experience card.

### Experience Card Fields

- Employer
- Position title
- Employment dates
- Location
- Responsibilities
- Accomplishments
- Technologies used
- Relevant skills

### Initial Experience

#### Associated Bank

**Cybersecurity Risk Management Intern**

May 2026 – August 2026

Areas of experience:

- Third-party cybersecurity risk assessments
- NIST Cybersecurity Framework
- Cybersecurity governance
- Risk scoring and assessment
- Incident response planning
- Business continuity
- Process improvement and automation

#### Federal Industries

**IT Intern**

Areas of experience:

- Active Directory administration
- Endpoint security
- IT infrastructure
- System troubleshooting
- Hardware and software support
- Device management

#### Green Bay Area Public School District

**IT Intern**

Areas of experience:

- Technical support
- Hardware deployment
- System troubleshooting
- IT operations

### Interactive Features

- Expandable experience cards
- Chronological timeline
- Technology badges
- Responsive layouts

---

## 4. Projects (`/projects`)

The Projects page will be one of the most important sections of the portfolio.

It should showcase software engineering, cybersecurity, AI, and academic projects.

### Features

- Project cards
- Featured projects
- Technology filtering
- Category filtering
- Search functionality
- Project screenshots
- GitHub/GitLab links
- Live demo links
- Dedicated project detail pages

### Project Categories

- Full-Stack Development
- Frontend Development
- Mobile Development
- Cybersecurity
- Artificial Intelligence
- Academic Projects
- Automation

### Initial Projects

#### CampusPulse

**Category:** Mobile Development

A student productivity and wellness application developed for Android.

Technologies:

- Kotlin
- Jetpack Compose
- Android Studio
- MVVM

Features:

- Academic scheduling
- Assignment management
- Navigation between application screens
- Student productivity tools
- Wellness-related functionality

#### Course Copilot

**Category:** AI / Full-Stack Development

An AI-powered academic assistant designed to help students manage coursework and monitor repository progress.

Technologies:

- React
- TypeScript
- Python
- FastAPI
- Docker
- SQLAlchemy

Features:

- AI-powered agents
- Assignment tracking
- Repository progress monitoring
- GitLab integration
- Secure credential management
- Tool orchestration

#### QnA Application

**Category:** Full-Stack Development

A collaborative question-and-answer application with real-time communication.

Technologies:

- React
- TypeScript
- FastAPI
- MySQL
- Redis
- Docker

Features:

- REST APIs
- Real-time communication
- Database integration
- Authentication
- Containerized deployment
- CI/CD workflows

---

# 📂 Project Detail Pages

Each project should have a dedicated page.

Route:

`/projects/:slug`

Example:

`/projects/course-copilot`

## Project Detail Structure

### Overview

Explain what the project does.

### Problem

Describe the problem the application addresses.

### Solution

Explain how the application solves the problem.

### Technologies

List the technologies used.

### Features

Highlight important application features.

### Architecture

Include technical architecture diagrams when available.

### Screenshots

Display screenshots or demonstrations.

### My Contributions

Explain the specific features and components I personally implemented.

This is especially important for team-based academic projects.

### Challenges

Discuss technical problems encountered and how they were solved.

### Lessons Learned

Describe important technical concepts learned during development.

### Links

- GitHub/GitLab repository
- Live demonstration
- Documentation

---

# 🎓 Coursework (`/coursework`)

The Coursework page will provide an interactive overview of my Computer Science education.

Instead of displaying a simple list of courses, the application will include a searchable and filterable coursework explorer.

## Coursework Features

- Search courses by name
- Filter by subject
- Filter by technology
- View course descriptions
- View skills learned
- View related projects
- Expand course details

## Initial Coursework

### Computer Science

| Course | Title |
|--------|-------|
| CS 200 | Programming I |
| CS 300 | Programming II |
| CS 400 | Programming III |
| CS 252 | Introduction to Computer Engineering |
| CS 407 | Mobile Systems and Applications |
| CS 639 | AI-Assisted Software Development |

### Mathematics and Statistics

| Course | Title |
|--------|-------|
| MATH 221 | Calculus I |
| MATH 222 | Calculus II |
| MATH 240 | Discrete Mathematics |
| MATH 340 | Linear Algebra |
| STAT 371 | Introductory Statistics |

Course information should be verified and updated before public deployment.

## Course Detail Pages

Route:

`/coursework/:slug`

Each course detail page should include:

- Course number
- Course title
- Course description
- Topics covered
- Technologies used
- Skills developed
- Related projects
- Relevant assignments

### Example: CS 639

**AI-Assisted Software Development**

Topics:

- React
- TypeScript
- REST APIs
- FastAPI
- SQL databases
- Docker
- Large Language Models
- Retrieval-Augmented Generation
- AI agents
- Prompt engineering
- AI security

Related projects:

- QnA Application
- Course Copilot

---

# 🧰 Technical Skills (`/skills`)

The Skills page should display technologies and technical competencies.

Skills should be organized by category.

## Programming Languages

- Java
- Python
- Kotlin
- TypeScript
- JavaScript

## Frontend Development

- React
- HTML
- CSS
- Tailwind CSS

## Backend Development

- FastAPI
- REST APIs
- SQLAlchemy

## Databases

- MySQL
- Redis

## Development Tools

- Git
- GitHub
- GitLab
- Docker
- Postman
- VS Code
- Android Studio

## Cybersecurity

- NIST Cybersecurity Framework
- Risk Assessment
- Endpoint Security
- Security Governance
- Incident Response
- Third-Party Risk Management

## IT Infrastructure

- Active Directory
- PowerShell
- Windows Administration
- Technical Troubleshooting
- Endpoint Management

## Artificial Intelligence

- Large Language Models
- Retrieval-Augmented Generation
- AI Agents
- Prompt Engineering
- AI-Assisted Development

## Interactive Skills Features

- Filter skills by category
- Click a skill to view related projects
- Display technology icons
- Show practical experience using each technology

Avoid arbitrary proficiency percentages.

Skills should be supported by actual projects, coursework, or professional experience.

---

# 📬 Contact (`/contact`)

The Contact page should make it easy for recruiters and developers to reach me.

## Features

- Email link
- GitHub profile
- LinkedIn profile
- Resume download
- Optional contact form

Contact information should be stored in a centralized configuration file.

Do not expose private credentials or sensitive information.

---

# 🏗️ Application Architecture

The application should follow a maintainable, component-based architecture.

## Proposed Folder Structure

```text
personal-portfolio/
│
├── public/
│   ├── images/
│   ├── projects/
│   ├── resume.pdf
│   └── favicon.ico
│
├── src/
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── PageLayout.tsx
│   │   │
│   │   ├── projects/
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── ProjectGrid.tsx
│   │   │   └── ProjectFilters.tsx
│   │   │
│   │   ├── experience/
│   │   │   ├── ExperienceCard.tsx
│   │   │   └── ExperienceTimeline.tsx
│   │   │
│   │   ├── coursework/
│   │   │   ├── CourseCard.tsx
│   │   │   └── CourseFilters.tsx
│   │   │
│   │   ├── skills/
│   │   │   ├── SkillBadge.tsx
│   │   │   └── SkillsGrid.tsx
│   │   │
│   │   └── shared/
│   │       ├── SectionHeader.tsx
│   │       ├── ThemeToggle.tsx
│   │       └── SearchBar.tsx
│   │
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectDetail.tsx
│   │   ├── Coursework.tsx
│   │   ├── CourseDetail.tsx
│   │   ├── Skills.tsx
│   │   ├── Contact.tsx
│   │   └── NotFound.tsx
│   │
│   ├── data/
│   │   ├── projects.ts
│   │   ├── experience.ts
│   │   ├── coursework.ts
│   │   ├── skills.ts
│   │   └── personal.ts
│   │
│   ├── types/
│   │   ├── project.ts
│   │   ├── experience.ts
│   │   ├── course.ts
│   │   └── skill.ts
│   │
│   ├── hooks/
│   │   └── useTheme.ts
│   │
│   ├── lib/
│   │   └── utils.ts
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── eslint.config.js
├── README.md
└── .gitignore
```

The structure may evolve as development progresses.

---

# 🗃️ Data Management

Portfolio content should be separated from UI components.

Use TypeScript data files to store projects, coursework, skills, and professional experience.

## Example Project Model

```typescript
export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  features: string[];
  contributions: string[];
  challenges?: string[];
  images: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}
```

## Example Project Data

```typescript
import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "course-copilot",
    slug: "course-copilot",
    title: "Course Copilot",
    category: "AI / Full Stack",
    description:
      "An AI-powered academic assistant for coursework and repository progress tracking.",
    technologies: [
      "React",
      "TypeScript",
      "FastAPI",
      "Python",
      "Docker"
    ],
    features: [
      "AI agents",
      "Assignment tracking",
      "Repository monitoring"
    ],
    contributions: [],
    images: [],
    featured: true
  }
];
```

All project cards and project detail pages should be generated from structured data.

Avoid hardcoding project information directly into React components.

---

# ⚡ Core Functionality

## Navigation

- Responsive navigation bar
- Mobile navigation menu
- Active page indicators
- Client-side routing
- Accessible navigation controls

## Theme Switching

- Dark mode by default
- Optional light mode
- Persist theme preference using localStorage
- Respect accessibility preferences where appropriate

## Project Filtering

Users should be able to filter projects by:

- Category
- Technology
- Project type

## Coursework Search

Users should be able to search by:

- Course code
- Course title
- Subject
- Technology

## Responsive Design

The application should support:

- Desktop
- Tablet
- Mobile

## Accessibility

Follow WCAG 2.2 AA principles where practical.

Requirements include:

- Semantic HTML
- Keyboard navigation
- Visible focus indicators
- Appropriate color contrast
- Accessible form labels
- Reduced-motion support
- Alt text for meaningful images

---

# 🧪 Testing and Quality

The application should maintain a clean and reliable codebase.

## Code Quality

- TypeScript strict mode
- ESLint
- Prettier
- Reusable components
- Consistent naming conventions
- Avoid unnecessary dependencies
- Avoid duplicated logic

## Testing

Recommended tools:

- Vitest
- React Testing Library

Prioritize tests for:

- Navigation
- Project filtering
- Coursework search
- Theme switching
- Data rendering
- Important user interactions

## Build Verification

Before merging major changes:

```bash
npm run lint
npm run build
```

Once tests are configured:

```bash
npm run test
```

Do not add scripts to documentation unless they exist in package.json.

---

# 🗺️ Development Roadmap

## Phase 1 — Foundation

- [ ] Initialize React + TypeScript project with Vite
- [ ] Install Tailwind CSS
- [ ] Configure shadcn/ui
- [ ] Configure React Router
- [ ] Implement global layout
- [ ] Build responsive navbar
- [ ] Implement dark/light theme
- [ ] Create homepage hero section
- [ ] Create footer
- [ ] Verify production build

### Phase 1 Deliverable

A working React application with navigation, theme switching, and a professional homepage.

---

## Phase 2 — Core Portfolio Content

- [ ] Build About page
- [ ] Build Experience page
- [ ] Build Projects page
- [ ] Build Coursework page
- [ ] Build Skills page
- [ ] Build Contact page
- [ ] Create structured data models
- [ ] Populate initial portfolio content
- [ ] Add reusable cards and layouts

### Phase 2 Deliverable

A complete portfolio containing academic, professional, and technical information.

---

## Phase 3 — Interactive Features

- [ ] Implement project filtering
- [ ] Implement coursework search
- [ ] Create project detail pages
- [ ] Create course detail pages
- [ ] Link technologies to relevant projects
- [ ] Add experience timeline
- [ ] Add project screenshots
- [ ] Add subtle animations
- [ ] Improve mobile responsiveness

### Phase 3 Deliverable

An interactive portfolio that allows visitors to explore projects, coursework, and skills.

---

## Phase 4 — Polish and Deployment

- [ ] Add downloadable resume
- [ ] Add GitHub and LinkedIn links
- [ ] Add favicon
- [ ] Improve accessibility
- [ ] Optimize images
- [ ] Add page titles and metadata
- [ ] Add Open Graph metadata
- [ ] Test mobile layouts
- [ ] Test navigation and interactions
- [ ] Configure GitHub Pages deployment
- [ ] Configure SPA routing fallback
- [ ] Deploy production application

### Phase 4 Deliverable

A publicly accessible portfolio ready to share with recruiters.

---

# 🔮 Future Enhancements

Potential future features include:

## Interactive Architecture Diagrams

Display technical architecture diagrams for selected projects.

Examples:

- React frontend communicating with FastAPI
- Database relationships
- Docker services
- AI agent workflows

## Recruiter View

Create a simplified portfolio mode that emphasizes:

- Work experience
- Technical skills
- Featured projects
- Resume
- Contact information

## Project Demonstrations

Embed videos or interactive demonstrations of selected applications.

## GitHub Integration

Optionally integrate the GitHub API to display:

- Public repositories
- Recent contributions
- Project links

## Content Management

Introduce a content management system if maintaining TypeScript data files becomes inconvenient.

These enhancements are optional and should not delay the initial release.

---

# 🤖 AI-Assisted Development Guidelines

This project will be developed with assistance from AI coding tools.

AI should be used to accelerate development while maintaining code quality and architectural consistency.

## Development Principles

1. Read this README before implementing major features.
2. Follow the established technology stack.
3. Use TypeScript for application code.
4. Prefer reusable React components.
5. Keep portfolio content separate from presentation logic.
6. Implement features incrementally.
7. Avoid unnecessary dependencies.
8. Maintain responsive design.
9. Follow accessibility best practices.
10. Verify builds after major changes.
11. Avoid unrelated refactoring.
12. Do not invent personal accomplishments or credentials.
13. Use placeholders when information is missing.
14. Explain significant architectural decisions.
15. Keep the application easy to maintain.

## AI Implementation Workflow

For each major feature:

1. Review the relevant requirements.
2. Identify the components and files that need changes.
3. Implement the feature.
4. Run available checks.
5. Fix errors.
6. Summarize the changes.
7. Identify remaining work.

Do not implement the entire roadmap in a single iteration.

---

# 💻 Local Development

## Prerequisites

- Node.js (current LTS version)
- npm
- Git

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate into the project:

```bash
cd personal-portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in the terminal.

## Production Build

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

These commands assume the project has been initialized with the standard Vite scripts.

---

# 🌐 Deployment

The application is hosted on **GitHub Pages** at
`https://giorodriguez1.github.io/Employment-Website/`.

## Deployment Process

Deployment is automated by `.github/workflows/deploy.yml`:

1. One-time setup: in the GitHub repository, go to **Settings → Pages** and set
   **Source** to **GitHub Actions**.
2. Push or merge to `main`. The workflow runs `npm ci` and `npm run build`, then
   publishes the `dist` folder.
3. Verify all routes and assets work correctly.

The workflow can also be run manually from the **Actions** tab.

## Notes

- The site is served from the `/Employment-Website/` subpath. This is set by
  `base` in `vite.config.ts`, and the router reads it through
  `import.meta.env.BASE_URL`. If the repository is renamed, update `base` to match.
- GitHub Pages has no SPA routing fallback, so the workflow copies `index.html`
  to `404.html`. Direct visits to routes like `/projects` then load the app.
- Files in `public/` (such as `resume.pdf`) must be referenced with the base
  prefix, e.g. `` `${import.meta.env.BASE_URL}resume.pdf` ``.

---

# 📌 Project Status

**Status:** Planning / Initial Development

**Current Phase:** Phase 1 — Foundation

The application is being developed incrementally.

---

# 📄 License

All rights reserved unless a license is added to the repository.

---

# 👤 Author

**Giovanny Rodriguez**

Computer Science Student  
University of Wisconsin–Madison  
Expected Graduation: Spring 2027

GitHub: [Add GitHub URL]

LinkedIn: [Add LinkedIn URL]

Portfolio: [Add deployed URL]

---

Built with React, TypeScript, and AI-assisted development.
