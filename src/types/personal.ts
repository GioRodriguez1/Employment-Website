export interface SocialLinks {
  github?: string
  linkedin?: string
  email?: string
}

export interface PersonalInfo {
  name: string
  headline: string
  focusAreas: string[]
  summary: string
  /** Paragraphs for the About page introduction. */
  about: string[]
  school: string
  degree: string
  /** Class standing, e.g. "Senior". */
  standing?: string
  graduation: string
  gpa?: string
  /** Main career interests, highlighted on the About page. */
  primaryInterests: string[]
  interests: string[]
  /** Path under /public, e.g. "/resume.pdf". Leave undefined to hide resume buttons. */
  resumeUrl?: string
  links: SocialLinks
}
