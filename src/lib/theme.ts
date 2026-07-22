/**
 * Single source of truth for the neon palette.
 *
 * These mirror the CSS tokens declared in `src/styles/index.css` (@theme
 * `--color-neon-*`). Use the Tailwind utilities (text-neon-cyan, etc.) in
 * className strings; use this module for inline styles / JS-computed values
 * (gradients, shadows, canvas-like effects) where Tailwind can't reach.
 */
export const palette = {
  ink: '#05020c',
  cyan: '#22d3ee',
  cyanSoft: '#67e8f9',
  violet: '#8b5cf6',
  violetSoft: '#a78bfa',
  fuchsia: '#e879f9',
} as const;

export type PaletteColor = (typeof palette)[keyof typeof palette];

/** Convert a #rrggbb hex to an rgba() string with the given alpha. */
export const withAlpha = (hex: string, alpha: number): string => {
  const value = hex.replace('#', '');
  const r = parseInt(value.slice(0, 2), 16);
  const g = parseInt(value.slice(2, 4), 16);
  const b = parseInt(value.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
