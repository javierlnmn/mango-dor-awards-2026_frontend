export interface NavItem {
  href: string;
  label: string;
}

/** Sidebar navigation — one entry per site page. */
export const NAV: NavItem[] = [
  { href: '/', label: 'Inicio' },
  { href: '/candidatos', label: 'Candidatos' },
  { href: '/categorias', label: 'Categorías' },
  { href: '/votar', label: 'Votar' },
  { href: '/resultados', label: 'Resultados' },
];
