export interface NavItem {
  href: string;
  label: string;
}

/** Sidebar navigation — one entry per site page. */
export const NAV: NavItem[] = [
  { href: '/', label: 'Inicio' },
  { href: '/candidates', label: 'Candidatos' },
  { href: '/categories', label: 'Categorías' },
];
