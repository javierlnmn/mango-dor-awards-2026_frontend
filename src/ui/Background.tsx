import { useEffect } from 'react';

import Particles from '@/ui/Particles';
import RetroGrid from '@/ui/RetroGrid';
import ScanlineOverlay from '@/ui/ScanlineOverlay';

/** The fixed, page-agnostic visual backdrop (grid, particles, spotlight, scanlines). */
const Background = () => {
  // Freeze all CSS animations while the tab is hidden (see `[data-hidden]` in
  // index.css). Purely a CPU/battery saving — nothing visible changes.
  useEffect(() => {
    const sync = () => {
      document.documentElement.dataset.hidden = String(document.hidden);
    };
    sync();
    document.addEventListener('visibilitychange', sync);
    return () => document.removeEventListener('visibilitychange', sync);
  }, []);

  return (
    <>
      <RetroGrid />
      <Particles />
      <ScanlineOverlay />
    </>
  );
};

export default Background;
