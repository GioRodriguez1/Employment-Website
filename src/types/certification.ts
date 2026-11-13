export type CertificationStatus = 'earned' | 'in-progress'

export interface Certification {
  name: string
  issuer: string
  status: CertificationStatus
  /** Optional date text, e.g. "May 2025". Hidden when undefined. */
  date?: string
  /** Optional verification/credential link. */
  url?: string
}
