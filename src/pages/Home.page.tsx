import { HeaderSimple } from '@/components/HeaderSimple/HeaderSimple';
import { HeroImageRight } from '@/components/HeroImageRight/HeroImageRight';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';

export function HomePage() {
  return (
    <>
      <HeaderSimple />
      <HeroImageRight />
      <ColorSchemeToggle />
    </>
  );
}
