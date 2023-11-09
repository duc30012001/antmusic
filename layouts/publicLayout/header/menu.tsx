import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { publicRoutes, publicRoutesType } from '../routes';

type Props = {};

function Menu({}: Props) {
  const { pathname } = useRouter();
  return (
    <>
      {publicRoutes.map((item: publicRoutesType) => (
        <Link
          key={item.id}
          href={item.href}
          className={clsx(
            'rounded-lg px-4 py-2 text-base font-medium !text-text-primary hover:bg-neutral-800',
            {
              'bg-neutral-800': pathname === item.href,
            }
          )}
        >
          {item.label}
        </Link>
      ))}
    </>
  );
}

export default Menu;
