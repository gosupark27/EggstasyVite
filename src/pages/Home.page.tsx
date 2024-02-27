import { Welcome } from '../components/Welcome/Welcome';
import { HeaderSimple } from '@/components/HeaderSimple/HeaderSimple';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';

export function HomePage() {
  return (
    <>
      <HeaderSimple />
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
