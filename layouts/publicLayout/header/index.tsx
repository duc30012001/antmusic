import Container from '@/components/container';
import Action from './action';
import AppLogo from './appLogo';
import Navbar from './navbar';
import NavbarMobile from './navbarMobile';

type Props = {};

function Header({}: Props) {
  return (
    <header className="p-3">
      <nav>
        <Container>
          <ul className="flex flex-row items-center justify-between">
            <li className="block lg:hidden">
              <NavbarMobile />
            </li>
            <li className="hidden sm:block">
              <AppLogo />
            </li>
            <li className="hidden lg:block">
              <Navbar />
            </li>
            <Action />
          </ul>
        </Container>
      </nav>
    </header>
  );
}

export default Header;
