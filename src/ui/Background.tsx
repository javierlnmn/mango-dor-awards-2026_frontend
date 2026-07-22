import CursorSpotlight from '@/ui/CursorSpotlight';
import Particles from '@/ui/Particles';
import RetroGrid from '@/ui/RetroGrid';
import ScanlineOverlay from '@/ui/ScanlineOverlay';

/** The fixed, page-agnostic visual backdrop (grid, particles, spotlight, scanlines). */
const Background = () => (
  <>
    <RetroGrid />
    <Particles />
    <CursorSpotlight />
    <ScanlineOverlay />
  </>
);

export default Background;
