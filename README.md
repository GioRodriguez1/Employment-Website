Personal Portfolio
A modern, responsive personal portfolio built with React, TypeScript, and Vite to showcase my software engineering projects, computer science coursework, cybersecurity experience, and technical skills.
About
I'm Giovanny Rodriguez, a Computer Science student at the University of Wisconsin–Madison, expecting to graduate in Spring 2027. This portfolio brings together my academic work, professional experience, and personal projects in one place.

The site is designed for recruiters, hiring managers, collaborators, and anyone interested in my work across software development, cybersecurity, IT, and AI.
Goals
- Make projects and technical contributions easy to explore.
- Connect coursework to real-world skills and projects.
- Highlight internships and measurable professional accomplishments.
- Provide quick access to my résumé and contact information.
- Keep content easy to update without modifying UI components.
Tech Stack
Area	Technology
Frontend	React, TypeScript, Vite
Styling	Tailwind CSS
UI components	shadcn/ui
Routing	React Router
Animations	Motion
Icons	Lucide React
Deployment	Vercel (planned)


Architecture: Static frontend initially; no backend or database required. Portfolio content will live in typed data files.
Planned Sections
Home
A concise introduction, featured projects, experience highlights, and clear links to projects, résumé, and contact details.
About
Education, background, technical interests, and career direction.
Experience
A timeline of professional experience, including:
- Associated Bank — Cybersecurity Risk Management Intern
- Federal Industries — IT Intern
- Green Bay Area Public School District — IT Intern
Each entry will focus on verified responsibilities, outcomes, and tools used.
Projects
Filterable project cards and dedicated project pages containing an overview, problem, solution, technologies, screenshots, architecture, challenges, personal contributions, and repository/demo links.

Initial projects:
- CampusPulse — Android student productivity and wellness application.
- Course Copilot — AI-assisted course and repository progress application.
- QnA — Full-stack real-time question-and-answer application.
Coursework
A searchable, filterable explorer of relevant university courses. Course details will include topics, tools, and links to related projects. Initial examples include CS 200, CS 300, CS 400, CS 252, CS 407, CS 639, MATH 340, and STAT 371.
Skills
Skills grouped by programming languages, frontend, backend, databases, DevOps, cybersecurity, IT, and AI. Technologies may link to projects that demonstrate their use.
Contact
Links to email, GitHub, LinkedIn, and a downloadable résumé. Real links and contact details will be added before launch.
Design Principles
- Professional first: Fast access to projects and experience.
- Dark by default: Charcoal/navy palette with subtle blue accents and an optional light theme.
- Responsive: Works on desktop, tablet, and mobile.
- Accessible: Semantic HTML, keyboard navigation, visible focus states, sufficient contrast, and reduced-motion support.
- Lightweight: Avoid unnecessary dependencies, distracting animations, and a backend until one is needed.
- Evidence-based: No invented metrics, credentials, dates, or project accomplishments.
Proposed Project Structure
src/
├── assets/                 # Images, screenshots, and other assets
├── components/
│   ├── layout/             # Navbar, footer, page shell
│   ├── projects/           # Project cards, filters, galleries
│   ├── coursework/         # Course cards and filters
│   └── ui/                 # Reusable UI components
├── data/
│   ├── projects.ts
│   ├── courses.ts
│   ├── experience.ts
│   └── skills.ts
├── pages/
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── ExperiencePage.tsx
│   ├── ProjectsPage.tsx
│   ├── ProjectDetailPage.tsx
│   ├── CourseworkPage.tsx
│   ├── SkillsPage.tsx
│   └── ContactPage.tsx
├── types/                  # Shared TypeScript interfaces
├── App.tsx
└── main.tsx
public/
└── resume.pdf              # Add when ready; avoid sensitive information
This is a target structure, not a claim that these files already exist.
Getting Started
The React app has not been scaffolded yet. Once it is initialized with Vite and dependencies are installed, use the commands below.

Prerequisite: a current Node.js LTS release and npm.
npm install
npm run dev
To check and build the production bundle:
npm run build
npm run preview
Add linting and tests as the application develops. Do not assume test scripts exist until configured.
Content Model
Portfolio content should be stored separately from components, using TypeScript types and data arrays. A project record might look like:
export interface Project {
  id: string;
  title: string;
  summary: string;
  category: string;
  technologies: string[];
  featured: boolean;
  contributions: string[];
  repositoryUrl?: string;
  demoUrl?: string;
  screenshots?: string[];
}
Only include public, shareable information. Do not publish private repositories, credentials, internal company documents, or proprietary implementation details.
Roadmap
- [ ] Phase 1 — Foundation: Scaffold Vite/React/TypeScript, configure Tailwind, routing, theme, navbar, footer, and homepage.
- [ ] Phase 2 — Content: Add experience, projects, coursework, skills, contact links, and résumé.
- [ ] Phase 3 — Interaction: Add project detail pages, course search/filtering, skill-to-project links, and subtle animations.
- [ ] Phase 4 — Quality: Add accessibility checks, responsive testing, image optimization, metadata, and automated checks.
- [ ] Phase 5 — Launch: Deploy, connect a custom domain if desired, and verify production links.
AI-Assisted Development Guidelines
This repository may be developed with AI coding assistants. Contributions should follow these principles:
1. Implement one small, reviewable feature at a time.
2. Explain proposed architecture changes before introducing complexity.
3. Reuse existing components and follow the project's TypeScript conventions.
4. Keep portfolio content in src/data/, not hardcoded across pages.
5. Run available build, lint, and test checks after changes.
6. Never invent biographical details, accomplishments, project results, or links.
7. Never commit secrets or publish confidential employer/course materials.
8. Prioritize accessibility, responsive behavior, and performance over flashy effects.
Status
Planning / initial development. Features listed above are planned unless explicitly marked as implemented in future updates.
License
No license has been selected yet. All rights reserved unless a license is added.
