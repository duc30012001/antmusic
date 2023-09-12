import logoImage from '@/assets/logo-ant-group.png';
import Image from 'next/image';
import Link from 'next/link';

type Props = {};

function AppLogo({}: Props) {
  return (
    <Link href={'/'}>
      <Image src={logoImage} alt="logo" width={200} height={80} />
    </Link>
  );
}

export default AppLogo;
