import Container from '@/components/container';
import CopyRight from './copyright';
import FooterNav from './nav';

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="relative rounded-t-3xl bg-neutral-950 py-20 text-white">
      <Container>
        <FooterNav />
        <hr className="mb-8 h-1 w-full border-t border-t-gray-800"></hr>
        <CopyRight />
      </Container>
    </footer>
  );
}

export default Footer;
