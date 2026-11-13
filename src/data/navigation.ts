export interface NavItem {
  label: string
  to: string
}

export const navItems: NavItem[] = [
  { label: 'About', to: '/about' },
  { label: 'Experience', to: '/experience' },
  { label: 'Projects', to: '/projects' },
  { label: 'Coursework', to: '/coursework' },
  { label: 'Skills', to: '/skills' },
  { label: 'Contact', to: '/contact' },
]
