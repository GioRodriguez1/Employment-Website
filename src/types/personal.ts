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
  school: string
  degree: string
  graduation: string
  interests: string[]
  /** Path under /public, e.g. "/resume.pdf". Leave undefined to hide resume buttons. */
  resumeUrl?: string
  links: SocialLinks
}
