import logoImage from '@/assets/logo/logo.png';
import style from '@/features/aboutUs/aboutStyle.module.css';
import Image from 'next/image';
import Link from 'next/link';

type Props = {};

function AppLogo({}: Props) {
  return (
    <Link
      href={'/'}
      className="flex items-center justify-center gap-3 text-2xl sm:justify-start"
    >
      <Image src={logoImage} alt="logo" width={50} height={50} />
      <span className={style.highlightCompanyName}>ANT Music</span>
    </Link>
  );
}

export default AppLogo;
