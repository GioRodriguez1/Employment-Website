import type { PersonalInfo } from '@/types/personal'

// Single source of truth for personal/contact details.
// Fields left undefined are hidden in the UI until you fill them in.
export const personal: PersonalInfo = {
  name: 'Giovanny Rodriguez',
  headline: 'Computer Science Student @ University of Wisconsin–Madison',
  focusAreas: ['Software Development', 'Cybersecurity', 'IT'],
  summary:
    'Senior focused on cybersecurity, networking, and IT, with hands-on experience in cybersecurity risk management and IT operations. I also build software, from mobile apps to full-stack and AI-powered tools.',
  // Draft intro — edit freely; each string is one paragraph.
  about: [
    "I'm a senior studying Computer Science at the University of Wisconsin–Madison. My main interests are cybersecurity, networking, and IT: understanding how systems connect, how they fail, and how to keep them secure.",
    "I've put those interests to work in cybersecurity risk management and IT operations roles, and I've built a range of software projects along the way, from mobile apps to full-stack and AI-powered tools.",
    "I hold Cisco's IT Essentials certification and I'm currently working toward CompTIA Security+.",
  ],
  school: 'University of Wisconsin–Madison',
  degree: 'B.S. Computer Science',
  standing: 'Senior',
  graduation: 'Spring 2027',
  gpa: '3.5',
  primaryInterests: ['Cybersecurity', 'Networking', 'IT'],
  interests: [
    'Cybersecurity',
    'Networking',
    'IT Infrastructure',
    'Full-Stack Development',
    'Artificial Intelligence',
    'Software Engineering',
  ],
  // TODO: add public/resume.pdf, then set:
  //   resumeUrl: `${import.meta.env.BASE_URL}resume.pdf`
  resumeUrl: undefined,
  links: {
    github: 'https://github.com/GioRodriguez1',
    linkedin: 'https://www.linkedin.com/in/giovanny-rodriguez123/',
    email: 'giovannyrodriguez093@gmail.com',
  },
}
