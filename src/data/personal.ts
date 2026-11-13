import type { PersonalInfo } from '@/types/personal'

// Single source of truth for personal/contact details.
// Fields left undefined are hidden in the UI until you fill them in.
export const personal: PersonalInfo = {
  name: 'Giovanny Rodriguez',
  headline: 'Computer Science Student @ University of Wisconsin–Madison',
  focusAreas: ['Software Development', 'Cybersecurity', 'IT'],
  summary:
    'I build full-stack and mobile applications and have professional experience in cybersecurity risk management, IT operations, endpoint security, and technical support.',
  school: 'University of Wisconsin–Madison',
  degree: 'B.S. Computer Science',
  graduation: 'Spring 2027',
  interests: [
    'Software Engineering',
    'Cybersecurity',
    'Full-Stack Development',
    'Artificial Intelligence',
    'Cloud Computing',
    'Automation',
  ],
  // TODO: add public/resume.pdf, then set resumeUrl: '/resume.pdf'
  resumeUrl: undefined,
  links: {
    // TODO: fill in your public profile URLs and contact email
    github: undefined,
    linkedin: undefined,
    email: undefined,
  },
}
